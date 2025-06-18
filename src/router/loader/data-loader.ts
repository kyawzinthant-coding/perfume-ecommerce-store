import { queryClient } from '@/lib/queryClient';
import { fetchSomethingQuery } from '@/api/query';
import {
  fetchCategoryAndBrandQuery,
  fetchProductsListQuery,
  OneProductQuery,
} from '@/api/product-query';
import { LoaderFunctionArgs } from 'react-router';

export const exampleLoader = async () => {
  await queryClient.ensureQueryData(fetchSomethingQuery());
  return null;
};

export const ProductLoader = async () => {
  await queryClient.ensureQueryData(fetchProductsListQuery());
  await queryClient.ensureQueryData(fetchCategoryAndBrandQuery());
  return null;
};

export const ProductDetailLoader = async ({ params }: LoaderFunctionArgs) => {
  console.log('param', params);
  if (!params.id) {
    throw new Error('Product id is required');
  }
  await queryClient.ensureQueryData(fetchCategoryAndBrandQuery());
  await queryClient.ensureQueryData(OneProductQuery(params.id));
  return { productId: params.id };
};
