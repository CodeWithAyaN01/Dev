function getData(dataId,getNextData) {
    setTimeout(() => {
        console.log("data->",dataId);
        if(getNextData)
            getNextData();
    },2000);
}

getData(1,() => { //  more amount of callback then it is called callback hell
    getData(2, () => {
        getData(3);
    });
});