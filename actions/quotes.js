import React from 'react';

import { log } from '@/utils/logger';

export const getMotivationalQuote = async () => {
    const response = await fetch(
        'https://quotes.rest/qod.json?category=inspire',
    );
    const quoteObj = await response.json();
    return quoteObj.contents.quotes[0].quote;
};
