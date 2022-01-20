import { notification } from 'antd'
export const notificationHandler = ({ type = 'info', title, description, url = '', duration = 4.5, placement = 'topRight' }) => {
    // notification.config({
    //     maxCount: 4
    // });

    const descriptionBody = (
        <>
            {description}
            <div data-testid='url-testid'>{url ? `URL: ${url}` : ''}</div>
        </>
    )

    notification[type]({
        message: title,
        description: descriptionBody,
        duration,
        placement,
        maxCount: 4
    });
}