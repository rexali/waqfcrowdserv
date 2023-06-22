const { transact } = require("../../dbase/transact");

class Projects {

    constructor(id) {
        this.id = id;
        this.esc = [];
    }
    
    projects(){
        const projectSql = `select * from projects`;
        
        return transact(projectSql, this.esc)
    };

    async comments(){
        commentSql = 'select * from comments';

        return await transact(commentSql, this.esc)
    };

    async shares(){ 
        const shareSql = 'select * from shares';
    

        await transact(shareSql, this.esc);
    }
    async donations(){ 

        const donationSql = 'select * from donations';

        return await transact(donationSql, this.esc)
    };

    async likes() {
        const likeSql = 'select * from likes';

        return await transact(likeSql, this.esc)};


    async comments() {

        return await this.comments.filter(comment => comment.projectId === this.id).length;
    }

    shares() {

        return this.shares.filter(share => share.projectId === this.id).length;
    }

    donations() {

        return this.donations.filter(donation => donation.projectId === this.id).length;
    }

    likes() {

        return this.likes.filter(like => like.projectId === this.id).length;
    }
}

module.exports={
    Projects
}