import '@testing-library/jest-dom'
import { screen } from '@testing-library/react'
import { notificationHandler } from './NotificationHandler'
import { notification } from 'antd'


window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener() { },
            removeListener() { },
        }
    })

describe('Notification handler', () => {

    it('Should show notification with default value', () => {
        notificationHandler({
            title: 'Unauthorized', description: 'This is the content of the notification.'
        })
        const notificationImage = screen.getAllByRole('img')[0]
        expect(notificationImage.getAttribute('aria-label')).toBe('info-circle')
        expect(screen.getByText('Unauthorized')).toBeInTheDocument()
        expect(screen.getByText('This is the content of the notification.')).toBeInTheDocument()
        expect(screen.queryByText(/URL:/i)).not.toBeInTheDocument()
        notification.destroy()
    })

    it.skip('Should show notification with explicit values', () => {
        notificationHandler({
            type: 'error', title: 'Error', description: 'This is the content of the notification.', url: 'https://www.google.com'
        })
        const notificationImage = screen.getAllByRole('img')[0]
        expect(notificationImage.getAttribute('aria-label')).toBe('close-circle')
        expect(screen.getByTestId('notification-testid').textContent).toBe('URL: https://www.google.com')
        expect(screen.getByText('Error')).toBeInTheDocument()
        notification.destroy()
    })
})

