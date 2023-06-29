/*
 * @Author: hujianwei hujianwei@china95059.com
 * @Date: 2023-06-27 15:08:28
 * @LastEditors: hujianwei hujianwei@china95059.com
 * @LastEditTime: 2023-06-28 16:24:51
 * @FilePath: /demo1/src/reportWebVitals.ts
 * @Description:
 *
 * Copyright (c) 2023 by ${git_name_email}, All Rights Reserved.
 */
import { ReportHandler } from 'web-vitals'

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry)
      getFID(onPerfEntry)
      getFCP(onPerfEntry)
      getLCP(onPerfEntry)
      getTTFB(onPerfEntry)
    })
  }
}

export default reportWebVitals
