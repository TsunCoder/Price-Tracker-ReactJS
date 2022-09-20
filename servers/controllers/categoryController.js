const axios = require("axios");

const categoryController = {
  getCategory: async (req, res) => {
    axios
      .get("https://shopee.vn/api/v4/pages/get_category_tree")
      .then((response) => {
        console.log(response);
        // console.log(response.data.explanation);
      });
    //   .catch((err) => {
    //     console.log(err);
    //   });
  },
};

module.exports = categoryController;
