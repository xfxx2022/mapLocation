import { saveAs } from 'file-saver'

export async function downloadExcel (data) {
  const XLSX = await import(/* webpackChunkName: "xlsx" */ 'xlsx')
  const workbook = XLSX.utils.book_new()
  const worksheet = XLSX.utils.aoa_to_sheet(data)
  XLSX.utils.book_append_sheet(workbook, worksheet, 'map.1314151.xyz')
  const wopts = { bookType:'xlsx', bookSST:false, type:'array' }
  const wbout = XLSX.write(workbook,wopts)
  saveAs(new Blob([wbout],{type: 'application/octet-stream'}), '番茄酱的map.xlsx')
}