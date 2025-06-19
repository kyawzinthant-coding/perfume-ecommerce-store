import api from '.';

export const fetchProducts = async (q?: string) =>
  (await api.get(`products/${q ?? ''}`)).data;

export const fetchProductsListQuery = () => ({
  queryKey: ['products'],
  queryFn: () => fetchProducts(),
});

export const fetchProduct = async (id: string) =>
  (await api.get(`products/${id}`)).data;

export const fetchReviews = async (id: string) =>
  (await api.get(`products/${id}/reviews`)).data;

export const fetchReviewsQuery = (id: string) => ({
  queryKey: ['reviews', id],
  queryFn: () => fetchReviews(id),
});

export const OneProductQuery = (id: string) => ({
  queryKey: ['product', id],
  queryFn: () => fetchProduct(id),
});
export const fetchCategoryAndBrand = async () =>
  (await api.get('filter-type')).data;

export const fetchCategoryAndBrandQuery = () => ({
  queryKey: ['filter-type'],
  queryFn: () => fetchCategoryAndBrand(),
});
