-- select all posts, join username, filter by topicID
SELECT posts.*, users.username from posts
LEFT JOIN users ON posts.poster_id = users.id
WHERE topic_id = 1