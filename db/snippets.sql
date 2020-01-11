-- select all posts, join username, filter by topicID
SELECT posts.*, users.username from posts
LEFT JOIN users ON posts.poster_id = users.id
WHERE topic_id = 1

SELECT posts.*, users.username, topics.topicname from posts
LEFT JOIN users ON posts.user_id = users.id
LEFT JOIN topics ON topics.id = posts.topic_id
WHERE topic_id = 1