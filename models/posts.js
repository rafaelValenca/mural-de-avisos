module.exports = {

    posts: [
        {
        id:"",
        title: "teste",
        desc: "desc do projeto"
        },
    ],

    getAll() {
        return this.posts;
    },

    newPost(title, desc) {
        this.posts.push({id:generateId(), title, desc});
    },

}

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}