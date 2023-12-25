function searchData(data) {
    try {
        var sectionData = [];
        const purposes = Array.from(new Set(data.map(item => item.purpose)));
        purposes.forEach((purpose) => {
            sectionData.push({
                purpose: purpose,
                data: [...data.filter((element) => element.purpose === purpose)] //.slice(0,2)
            });
        });
    
        return sectionData;  
    } catch (error) {
        console.warn(error);
    }
    
}
module.exports = {
    searchData
}

