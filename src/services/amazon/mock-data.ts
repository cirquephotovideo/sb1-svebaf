import type { AmazonProductResponse } from '../../types/amazon';

const SONY_ZV1_EAN = '5013493389571';

export const mockProductData = (ean: string): AmazonProductResponse => {
  if (ean === SONY_ZV1_EAN) {
    return {
      title: 'Sony ZV-1 Digital Camera for Content Creators',
      description: 'Professional vlogging camera with real-time AF and excellent image quality',
      asin: 'B08965JV8D',
      price: 749.99,
      dimensions: {
        length: 10.5,
        width: 4.4,
        height: 6,
        unit: 'cm',
      },
      weight: {
        value: 0.294,
        unit: 'kg',
      },
      images: [
        'https://m.media-amazon.com/images/I/81WtQ64-SOL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71VOXdCRhQL._AC_SL1500_.jpg',
        'https://m.media-amazon.com/images/I/71n7LCyKj6L._AC_SL1500_.jpg',
      ],
      browseNodes: ['Digital Cameras', 'Vlogging Cameras'],
      salesRank: 127,
      buyBox: {
        price: 749.99,
        sellerId: 'A2Q3Y263D00KWC',
        sellerName: 'Sony Store',
        isAmazonFulfilled: true,
        isAmazonSelling: false,
        isPreorder: false,
        isBackordered: false,
        shippingCountry: 'FR',
      },
      amazonPrice: 749.99,
      lowestPrices: {
        fbaNew: 749.99,
        new: 729.99,
        used: 649.99,
        collectible: null,
        refurbished: 699.99,
      },
      listPrice: 799.99,
      productGroup: 'Electronics',
      productType: 'Digital Camera',
      variationsCount: 1,
      importCode: 'SNYZV1',
      upc: '027242919755',
      partNumber: 'DCZV1/B',
      newOffersCount: 12,
      usedOffersCount: 5,
      collectibleOffersCount: 0,
      refurbishedOffersCount: 3,
      referralFeePercentage: 8,
      prepFee: 0,
      packageDimensions: {
        length: 15,
        width: 12,
        height: 10,
        unit: 'cm',
      },
      packageWeight: {
        value: 850,
        unit: 'g',
      },
      packageQuantity: 1,
      brand: 'Sony',
      manufacturer: 'Sony Corporation',
      contributors: ['Sony Electronics'],
      publicationDate: '2020-05-26',
      releaseDate: '2020-06-11',
      color: 'Black',
      size: 'Standard',
      features: [
        '20.1MP 1.0-type stacked CMOS sensor',
        'ZEISS 24-70mm F1.8-2.8 lens',
        'Real-time Eye AF (human/animal)',
        'Side-opening Vari-angle LCD screen',
        '4K movie recording with full pixel readout',
      ],
      itemsCount: 1,
      pagesCount: null,
      isExchangeable: true,
      marketplace: 'Amazon France',
    };
  }

  // Generate mock data for other EAN codes
  const randomPrice = Math.round(Math.random() * 10000) / 100;
  
  return {
    title: `Product ${ean}`,
    description: 'High-quality product with advanced features and premium build quality.',
    asin: `B${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
    price: randomPrice,
    dimensions: {
      length: Math.round(Math.random() * 100),
      width: Math.round(Math.random() * 100),
      height: Math.round(Math.random() * 100),
      unit: 'cm',
    },
    weight: {
      value: Math.round(Math.random() * 1000) / 100,
      unit: 'kg',
    },
    images: [
      `https://source.unsplash.com/800x600/?product&${ean}-1`,
      `https://source.unsplash.com/800x600/?product&${ean}-2`,
    ],
    browseNodes: ['Electronics', 'Accessories'],
    salesRank: Math.floor(Math.random() * 100000),
    buyBox: {
      price: randomPrice,
      sellerId: `A${Math.random().toString(36).substring(2, 11).toUpperCase()}`,
      sellerName: 'Sample Seller',
      isAmazonFulfilled: Math.random() > 0.5,
      isAmazonSelling: Math.random() > 0.5,
      isPreorder: false,
      isBackordered: false,
      shippingCountry: 'FR',
    },
    amazonPrice: randomPrice,
    lowestPrices: {
      fbaNew: randomPrice,
      new: randomPrice * 0.95,
      used: randomPrice * 0.8,
      collectible: null,
      refurbished: randomPrice * 0.9,
    },
    listPrice: randomPrice * 1.2,
    productGroup: 'Electronics',
    productType: 'Accessory',
    variationsCount: Math.floor(Math.random() * 10),
    importCode: `IMP${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    upc: Math.random().toString().substring(2, 14),
    partNumber: `PN${Math.random().toString(36).substring(2, 8).toUpperCase()}`,
    newOffersCount: Math.floor(Math.random() * 50),
    usedOffersCount: Math.floor(Math.random() * 20),
    collectibleOffersCount: Math.floor(Math.random() * 5),
    refurbishedOffersCount: Math.floor(Math.random() * 10),
    referralFeePercentage: Math.round(Math.random() * 1500) / 100,
    prepFee: Math.round(Math.random() * 1000) / 100,
    packageDimensions: {
      length: Math.round(Math.random() * 100),
      width: Math.round(Math.random() * 100),
      height: Math.round(Math.random() * 100),
      unit: 'cm',
    },
    packageWeight: {
      value: Math.round(Math.random() * 5000),
      unit: 'g',
    },
    packageQuantity: Math.floor(Math.random() * 10) + 1,
    brand: 'Sample Brand',
    manufacturer: 'Sample Manufacturer',
    contributors: ['Contributor 1', 'Contributor 2'],
    publicationDate: new Date(Date.now() - Math.random() * 31536000000).toISOString().split('T')[0],
    releaseDate: new Date(Date.now() + Math.random() * 31536000000).toISOString().split('T')[0],
    color: ['Black', 'White', 'Blue', 'Red'][Math.floor(Math.random() * 4)],
    size: ['Small', 'Medium', 'Large'][Math.floor(Math.random() * 3)],
    features: [
      'Feature 1',
      'Feature 2',
      'Feature 3',
    ],
    itemsCount: Math.floor(Math.random() * 5) + 1,
    pagesCount: null,
    isExchangeable: Math.random() > 0.5,
    marketplace: 'Amazon France',
  };
};