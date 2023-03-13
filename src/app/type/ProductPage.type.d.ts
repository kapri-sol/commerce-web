import React, { createContext, useEffect, useState, ReactNode } from "react";
import MainApi from "../api/main.api";

interface Props {
    children: ReactNode;
}

export interface ProductPage {
    content: ProductData[];
    size: number;
    totalPage: number
}

export interface ProductData {
    id: number;
    title: string;
    description: string;
    image: string;
    price: number;
    stockQuantity: number;
}

