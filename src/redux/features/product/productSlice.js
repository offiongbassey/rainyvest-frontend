import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import productService from "./productService";

const initialState = {
    product: null,
    products: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ""
}

//create new Product 
export const createProduct = createAsyncThunk(
        "product/create",
        async(formData, thunkAPI) => {
            try {
                return await productService.createProduct(formData)
            } catch (error) {
                const message = (
                    error.response && error.response.data
                    && error.response.data.message)
                    || error.message || error.toString();
                    console.log(message)
                    return thunkAPI.rejectWithValue(message);
            }
        }
);
export const getProducts = createAsyncThunk(
    "product/get",
    async(_, thunkAPI) => {
        try {
            return await productService.getProducts();
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message)
                || error.message || error.toString();
                console.log(message);
                return thunkAPI.rejectWithValue(message);
        }
    }
)
export const editProduct = createAsyncThunk(
    "product/edit",
    async({id, formData}, thunkAPI) => {
        try {
            return await productService.editProduct({id, formData})
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message)
                || error.message || error.toString();
                console.log(message)
                return thunkAPI.rejectWithValue(message);
        }
    }
)
export const updateProductStatus = createAsyncThunk(
    "product/status",
    async(id, thunkAPI) => {
        try {
            return await productService.changeProductStatus(id);
        } catch (error) {
            const message = (
                error.response && error.response.data
                && error.response.data.message)
                || error.message || error.toString();
                console.log(message)
                return thunkAPI.rejectWithValue(message); 
        }
    }
)
const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: (builder) => {
        builder
        .addCase(createProduct.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.products.push(action.payload);
            toast.success("Product Successfully Added");
        })
        .addCase(createProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        })
        .addCase(getProducts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.products = action.payload;
        })
        .addCase(getProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        })
        .addCase(editProduct.pending, (state) => {
            state.isLoading = true
        })
        .addCase(editProduct.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast.success("Product Successfully Modified");
        })
        .addCase(editProduct.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        })
        .addCase(updateProductStatus.pending, (state) => {
            state.isLoading = true
        })
        .addCase(updateProductStatus.fulfilled, (state, action) => {
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            toast.success("Product Status Successfully Modified");
        })
        .addCase(updateProductStatus.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
            state.message = action.payload;
            toast.error(action.payload);
        })
    }
});

export const selectIsLoading = (state) => state.product.isLoading;
export const selectProduct = (state) => state.product.product;
export default productSlice.reducer;
