function addToCart() {
    console.log("test case");
    let item = {};
    item.imgUrl = this.itemUrlChecked;
    item.title = this.title;
    item.price = this.price;
    item.count = this.buyNumber;
    item.id = this.id;
    this.$store.commit("addItem", item);
    let mes = this.$message({
        type: "success",
        showClose: true,
        message: "加入购物车成功！",
        duration: 1500,
    });
}

function handlePageChange(page) {
    this.page = page;
    axiosInstance({
        method: "get",
        url: "/good/good/search",
        params: {
            pageNum: this.page,
            pageSize: 15,
        },
    }).then((res) => {
        if (res.data.code == 200) {
            this.itemArray = [];
            res.data.data.goodModelList.forEach((value, index) => {
                value.index = index;
                this.itemArray.push(value);
            });
        }
    });
}

function handleItemChange(page) {
    this.page = page;
    axiosInstance({
        method: "get",
        url: "/good/good/search",
        params: {
            pageNum: this.page,
            pageSize: 15,
        },
    }).then((res) => {
        if (res.data.code == 200) {
            this.itemArray = [];
            res.data.data.goodModelList.forEach((value, index) => {
                value.index = index;
                this.itemArray.push(value);
            });
        }
    });
}