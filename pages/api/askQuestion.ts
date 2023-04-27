import queryXandriaApi from '../../lib/queryXandriaApi'
import type { NextApiRequest, NextApiResponse } from 'next'
import { adminDb } from '@/firebaseAdmin'
import admin from 'firebase-admin'

type Data = {
    answer: string
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const { prompt, chatId, session } = req.body

    if (!prompt) {
        res.status(400).json({ answer: 'Please prvide a prompt!' })
        return
    }

    if (!chatId) {
        res.status(400).json({ answer: 'No chat ID provided!' })
        return
    }

    const response = await queryXandriaApi(prompt)

    const message: Message = {
        text: response || 'Xandria was unable to respond to your question. Please try again later.',
        createdAt: admin.firestore.Timestamp.now(),
        user: {
            _id: 'Xandria',
            name: 'Xandria',
            avatar: 'https://s3.eu-central-1.amazonaws.com/prod-platform-branding/32437fe8-6c0d-4aab-9e34-6d99c67c5fa3/9b3fcea6-1df6-4215-b8ec-83954315d74b/avatar-b4a45729-2ab3-4905-baab-30b253cbbfbb',
        },
    }

    await adminDb
    .collection('users')
    .doc(session?.user?.email)
    .collection('chats')
    .doc(chatId)
    .collection('messages')
    .add(message)

    res.status(200).json({ answer: message.text })
}