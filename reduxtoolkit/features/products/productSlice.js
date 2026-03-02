const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');
const axios = require('axios');

const initialState = {
  loading: false,
  products: [],
  error: ""
};

const fetchProducts = createAsyncThunk(
  'product/fetchProducts',
  async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    return response.data;
  }
);

const productSlice = createSlice({
  name: 'product',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = action.payload;
      state.error = "";
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  }
});

module.exports = productSlice.reducer;
module.exports.fetchProducts = fetchProducts;