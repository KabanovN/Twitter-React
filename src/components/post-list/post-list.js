import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({ posts, onDelete, onToggleImportant, onToggleLiked }) => {
    const elements = posts.map((item) => {
        if (typeof item === 'object' && isEmpty(item)) {
            const { id, ...itemProps } = item;
            return (
                <li key={id} className='list-group-item'>
                    <PostListItem
                        {...itemProps}
                        onDelete={() => onDelete(id)}
                        onToggleImportant={() => onToggleImportant(id)}
                        onToggleLiked={() => onToggleLiked(id)}
                    />
                </li>
            );
        }
    });

    // проверка на заполнение данными
    function isEmpty(obj) {
        for (let key in obj) {
            return true;
        }
        return false;
    }

    return <ul className='app-list list-group'>{elements}</ul>;
};

export default PostList;