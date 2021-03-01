import React, { useState } from 'react';
import axios from 'axios';

import { useReqStatus } from '@/actions';

export const addSubject = (subject) => {
    return axios.post(`/api/v1/subjects`, subject);
};

export const useAddSubject = () => {
    return useReqStatus(addSubject);
};
