function paginateWaqf(page, pageSize, products) {
    // const page = parseInt(req.query.page);
    // const pageSize = parseInt(req.query.pageSize);

    // Calculate the start and end indexes for the requested page
    const startIndex = (page - 1) * pageSize;

    const endIndex = page * pageSize;

    // Slice the products array based on the indexes
    const paginatedProducts = products.slice(startIndex, endIndex);

    // Calculate the total number of pages
    const totalPages = Math.ceil(products.length / pageSize);

    return {
        waqfs: paginatedProducts,
        totalPages: totalPages
    }
}

module.exports = {
    paginateWaqf
}