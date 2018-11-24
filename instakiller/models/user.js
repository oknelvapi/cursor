class UserBase {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
}

class AdminUser extends UserBase {
    constructor(name, email, permissions) {
        super(name, email);
        this.permissions = permissions;
    }


    isAdmin() {
        return this._checkPermission('admin');
    }
    isModerator() {
        return this._checkPermission('moderator');
    }
    _checkPermission(permission) {
        return this.permissions.some(p => p === permission);
    }
}

class User extends UserBase {
    constructor(name, email, age) {
        super(name, email);
        this.age = age;
    }
}

class UserService {
    checkUser(user) {
        if (user instanceof User){

        } else if (user instanceof AdminUser) {

        }
    }

    validateUserEmail(user) {
        if (user.email) {
            return true;
        }
    }
}

class PostBase {
    constructor(like, description, location, content) {
        this.like = like;
        this.description = description;
        this.location = location;
        this.content = content;
    }
}

class PhotoPost extends PostBase {
    constructor(like, description, location, content) {
        super(like, description, location, content);
    }
}

class VideoPost extends PostBase {
    constructor(like, description, location, content){
        super(like, description, location, content)
        this.views = views;
    }
}

class UserPostService {
    post(post) {
        if (post instanceof PhotoPost) {

        } else if (post instanceof VideoPost) {

        }
    }

    postMultiply(posts) {
        for (const post of posts) {
            this.post(post);
        }
    }
}