function imageFilter(req, file, cb) {
    // Accept images only
    if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
        req.fileValidationError = 'Only image files are allowed!';
        return cb(new Error('Only image files are allowed!'), false);
    }

    if (file.size > 0.1 * 1024 * 1024) {
        return cb(new Error('Image file(s) is/are too large!'), false);
    }

    cb(null, true);
};

module.exports = {
    imageFilter
};
