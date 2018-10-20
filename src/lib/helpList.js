export const formatSection =  (data,sectionValues,nameOfFilter) =>{
    const dataBlob = {};
    const sectionIds = [];
    const rowIds = [];

    for (let sectionId = 0; sectionId < sectionValues.length; sectionId++) {
        // Get the date we're currently looking for
        const currentValue = sectionValues[sectionId];
        const findByValue = data.filter((issue) => issue[nameOfFilter].indexOf(currentValue) === 0);
        if (findByValue.length > 0) {
            // Add a section id to our array so the listview knows that we've got a new section
            sectionIds.push(sectionId);
            
            dataBlob[sectionId] = { value: currentValue };
            // Setup a new array that we can store the row ids for this section
            rowIds.push([]);

            // Loop over the valid transactions for date for this section
            for (let i = 0; i < findByValue.length; i++) {
                // Create a unique row id for the data blob that the listview can use for reference
                const rowId = `${sectionId}:${i}`;
    
                // Push the row id to the row ids array. This is what listview will reference to pull
                // data from our data blob
                rowIds[rowIds.length - 1].push(rowId);
    
                // Store the data we care about for this row
                dataBlob[rowId] = findByValue[i];
            }
        }
    }
    return { dataBlob, sectionIds, rowIds };
}
export const  arrayNoDuplicate =(a)=> {
    var temp = {};
    for (var i = 0; i < a.length; i++)
        temp[a[i].data] = true;
    var r = [];
    for (var k in temp)
        r.push(k);
    return r;
}