function getCommentNumber(data = []) {
    const comments = data.map(getEachComment).filter((comment)=>comment !== null);

    return getUniqeFromSet(comments).length;
}

const getEachComment = (comment, i) => {
    // return comment.body !== null;
    return comment.body;
};

// get likes number
function getLikeNumber(data = []) {
    const likes = data.map(getEachLike).filter((like)=>like !== null);
    return getUniqeFromSet(likes).length;
}

const getEachLike = (like) => {
    return like.likeId;
};

// get donation number
function getDonationNumber(data = []) {
    const donations = data.map(getEachDonation).filter((donation)=>donation !== null);;
    return getUniqeFromSet(donations).length;
}

const getEachDonation = (donation) => {
    return donation?.donationId;
};

// get share number
function getShareNumber(data = []) {
    const shares = data.map(getEachShare).filter((share)=>share !== null);
    return getUniqeFromSet(shares).length;
}

const getEachShare = (share) => {
    return share.shareId;
};

// get unique data
const getUniqeFromSet = (data=[])=>{
    return Array.of(...new Set(data));
}

const getUniqeFromObject = (data=[])=>{
    return Array.from(data);
}


module.exports = {
    getCommentNumber,
    getLikeNumber,
    getDonationNumber,
    getShareNumber
}