import { CheckoutFormData, CheckoutResponse, Product, ProductShortInfo } from "../../src/common/types";
import { AxiosResponse } from "axios";

export const dummyCart = {
      1: {
          name: 'Fake#1',
          price: 12,
          count: 1,
      },
      2: {
          name: 'Fake#2',
          price: 56,
          count: 3,
      },
      3: {
          name: 'Fake#3',
          price: 86,
          count: 2,
      }
  }
  export const dummyResponce: AxiosResponse<ProductShortInfo[], any> = {
  data: [
    {
        id: 123,
        name: 'Fake#1',
        price: 12,
    },
    {
        id: 1,
        name: 'Fake#2',
        price: 122,
    },
    {
        id: 33,
        name: 'Fake#3',
        price: 458,
    },

],
  status: 200,
  statusText: '',
  headers: {},
  config: {}
}

export const dummyProduct: AxiosResponse<Product, any> = {
  data: {
    description: 'фейк какой-то',
    material: 'шкура молодого дерматина',
    color: 'black',
    id: 1,
    name: 'Fake#2',
    price: 122,

  },
  status: 200,
  statusText: '',
  headers: {},
  config: {}
}

export const dummyCheckout: AxiosResponse<CheckoutResponse, any> = {
  data: {
    id: 12
  },
  status: 200,
  statusText: '',
  headers: {},
  config: {}
}
export const dummyUser: CheckoutFormData = {
  name: 'M0rty',
  phone: '25872586234',
  address: 'Punxatawny St',
}
