import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import format from 'date-fns/format';

// https://date-fns.org/v2.17.0/docs/formatDistanceToNow
export function formatCreatedAt(timestamp) {
    return formatDistanceToNow(new Date (timestamp), {
        addSuffix: true
    });
}

// https://date-fns.org/v2.17.0/docs/format
export function formatDate(timestamp) {
    return format(new Date(timestamp), 'do MMM, yyyy');
}

export function formatTime(timestamp) {
    return format(new Date(timestamp), 'pp')
}
