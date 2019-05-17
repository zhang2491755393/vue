<template>
    <div>
        <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
    </div>
</template>
<script>
import {Picker} from 'mint-ui';
import address from '../assets/address3.json'
export default {
    data(){
        return {

        }
    },
 methods: {
    onValuesChange(picker, values) {
      if (values[0] > values[1]) {
        picker.setSlotValue(1, values[0]);
      }
    }
  },
  data() {
    return {
      slots:address
    };
  }
}
</script>
[
{"title":"Lifelong Bow 手链, 白色, 镀白金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTc2Nzd8aW1hZ2UvanBlZ3xoNjMvaDk3LzkxMTA5ODU2NzA2ODYuanBnfGU0ODIwMmYwNmI5MWZiMTEzMzAxNTc1ODJmM2Y3Njk0MDliMmJkZmM3ZjNkYjljZTAyYjI4ZWU3Y2EzZmIzMGU","price":" 690.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Lifelong Bow 手镯, 白色, 混搭多种镀层","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTc0OTJ8aW1hZ2UvanBlZ3xoN2QvaGE0LzkxMTA4OTE0OTU0NTQuanBnfDA5OThhMzJhZDcxNzQ0NGZkYzA5NTAxYmExZmM1Yzg5MThkYTgxNDM1M2M2YmExYThjZTMzMjUyNmU2N2IzNDQ","price":" 1,290.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Dazzling Swan 手链, 彩色设计, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjEwOTR8aW1hZ2UvanBlZ3xoNTUvaDE2LzkxMDAwMjIxMjA0NzguanBnfDJjZTFlYmZmNWI3OTg2YzNhN2NiOGZhMTMzMTk2ZDkyYzY2YTliMmI1ZTVlN2ViNjA5M2QwZTdjMzAxNmEwZjI","price":" 1,190.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"North 手链, 白色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjExNTh8aW1hZ2UvanBlZ3xoM2MvaDE3LzkxMTUyNDkwNDk2MzAuanBnfDczN2ZmNjg4ZTA2Nzk1NzA4Mjg0MjhkNmM2NmRjNTIzNjM1M2I3MjU0YzFkMDU1ZjIwNTJjMjFjYWNlOGZiZDk","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Stone 手镯, 蓝绿色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjIwNDd8aW1hZ2UvanBlZ3xoZDEvaDRlLzkxMTUyMjEzOTM0MzguanBnfGZhNDMxMzIzMGQyMTZhNTMyMzg1M2RiNGM2ZDdiOGI4MDkxYzFkOTgwMDI1NDA5ODEzM2M4OGY0OTQwZjVhNDQ","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Swarovski Remix Collection Pearl Strand, 彩色设计, 镀白金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTYwODN8aW1hZ2UvanBlZ3xoMmUvaDQwLzkxMTUyMDAwNjE0NzAuanBnfDY1OTczZDg4Y2ZjMDE3OTIyMDkyMWJlMDVhMWNkNWEzMmZlMDBlMzA3OGM2NTk5MzYzMzdjZjdkNDVjMTg3NmE","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Luckily 手链, 彩色设计, 镀白金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTY4MTB8aW1hZ2UvanBlZ3xoZjcvaDY4LzkxMTA5MDI0NzI3MzQuanBnfGZkZjg0NTFkNGVmM2M4ODYyYmEyNGFkYzgyNjE3ZWEwNDk0MGIzNmY3M2YxYjdlMTg0NTYwYzlhMjhmM2U1ZGY","price":" 690.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Stone 手镯, 白色, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTczNDF8aW1hZ2UvanBlZ3xoNWYvaGM5LzkxMTUzNDc3NDY4NDYuanBnfGYwZTQzZjRlNDBiMjQwNjJhYjA2YTI0YjJlODBlNzdmZWE5MmMxMjhlNmYwODg4NTA0YmZlYjAwMzUzZmFmZjc","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Swarovski Remix Collection Lilia Strand, 白色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjI1NDZ8aW1hZ2UvanBlZ3xoODEvaDM5LzkxMTQ2Mjc2MzcyNzguanBnfDVlMzNjZWI0OWMzNjk1NjFiYWFkNjc5MGQwY2I2ZWVjM2RlYTk0NmU3MDM0MGJiMzI3NTc1MmM4ODBkOTQ3MjM","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Swarovski Remix Collection Pop Strand, 绿色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjU4MzZ8aW1hZ2UvanBlZ3xoZTQvaDJmLzkxMTQ2MjM4MzYxOTAuanBnfDA3YzgxNTcxOGQ4OWM2OGZkY2EwYjM4NWM2ODJiNmU2NTdlMmI5N2FiNDJiZjk1YjRjN2ZkYWUwMWE0Njc2MDM","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Only 手链, 白色, 镀白金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTIwMjJ8aW1hZ2UvanBlZ3xoN2QvaGNlLzkxMTUzNjc4MzM2MzAuanBnfDZiOGY4NmZhOTI5NWMwYTY5MDljN2RlYmRlYTRhZDk1Y2M2N2U5ZTMwNmU2MDZkY2E4MTZiZWJhMTQ3NjZjODA","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Nicest 套装, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjQ5MTd8aW1hZ2UvanBlZ3xoMjIvaGYwLzkxMTUxOTU3MzYwOTQuanBnfDk0Mzg0MWVlMjdmM2FkOTZmYTQyOTFkZWZhNTg3ZGJiOTI2OGZkZTNiZTY4MDliN2RkYjUwMzI0NGQ4ZWU4YTk","price":" 1,790.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"North 手链, 蓝色, 镀白金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTQxNzh8aW1hZ2UvanBlZ3xoYjUvaDRjLzkxMTUxOTU3MDMzMjYuanBnfGNjYmVjNzI0YjllNjFlZWE2ZTUyMGUzYTJkYjViYzU4ZWU5YTYzMWVhNmFkMTkzMWFhNjM2ZmQxYzdiOWJiOTQ","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Only 手链, 白色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTcwNTZ8aW1hZ2UvanBlZ3xoOWIvaDFjLzkxMTA5MzAwNjMzOTAuanBnfGQ5MmMzYzIzMmU3ODU0ODNiMWQ3MjYzYzQxZjljMzVjMTQzMzhlOGE1ZmM3OWUwNGIyZDY3NDkzNDYzNjJkOGY","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Swarovski Remix Collection Ladybug Strand, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjQ2MTF8aW1hZ2UvanBlZ3xoOGQvaGZmLzkxMTQ2Mjc3MDI4MTQuanBnfDI0NWVlYWIzNGMxZmQ5MmNkZjg0NGI1N2Q2NTMzMjk2ZDRiNjNjNjgxNWNmMjIzMmIyMGU5MWIwNjQ1ZGYxOTA","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Lucky Goddess Charms 手链, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MzY2OTh8aW1hZ2UvanBlZ3xoYTcvaGVhLzkxMTUyNDQxMDE2NjIuanBnfDM3ZDAwNmYyMDcyYzFjZDI2NzM5Y2I5NmM0ZjQ3YzM0MDM5ODJjZWMyMmE0YmFlNTIxN2Q5YzFhNTg1MjI1ZWU","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Olive 手镯, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjgwNzR8aW1hZ2UvanBlZ3xoNmQvaDY5LzkxMTUzNTgwMzU5OTguanBnfGNhMThlNGFjZGVkYTQ4YWJkMjEzY2M1NjY4NDI1MGUzNzhhODU1OGI3MjQ1NzE4MzgwY2JlMTg4OTJhNjk4MzQ","price":" 1,190.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Oxygen 手镯, 绿色, 镀白金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTYxMzJ8aW1hZ2UvanBlZ3xoMGEvaGEyLzkxMTUzNDg3NjI2NTQuanBnfDIwOWIxMDA0Y2NhZDllMmZjZjA1YzdmMzAzMjhlZWQzNTQ5OWZjNTc3MTk0ZmIxYTNlM2E5MWNjMzYxOTEwYmU","price":" 1,190.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Swarovski Remix Collection Pop Strand, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8Mjg2ODV8aW1hZ2UvanBlZ3xoNzUvaGFhLzkxMTUyMDgxODc5MzQuanBnfGVkZjA1YmJlNTczMmM0NTMyMmJjZmRjMzg5Njg4N2E5YTg5YWU5N2I0NDg4YWM1NGFkYjBmY2NiOWQwZGNjNDU","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"No Regrets Ice Cream 手链, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8Mjc4MjZ8aW1hZ2UvanBlZ3xoZGUvaGEwLzkxMTUzNTg2MjU4MjIuanBnfDJkYWRkZjYwY2ZkM2JiMjE0Y2ExYzE4MDM1YTc1ZDE1NGE4ODBlODdkZTVlMjA1MDRiMmU2YmRhMGEwZTg4NGI","price":" 1,190.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Ocean 手链, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MzcwMDF8aW1hZ2UvanBlZ3xoY2MvaGIzLzkxMTUyNTQ0NTYzNTAuanBnfDlmY2Y3MzE4NjQ5N2UwOWNhNDZjZjE4ZTk5ZjMwOTZkMjY1N2JmMjU5NzYyOTlmYjJiNzVlZjVmNGFlZmRlYTM","price":" 1,290.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Swarovski Remix Collection Pop Strand, 紫色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjU1MTl8aW1hZ2UvanBlZ3xoYTkvaGY4LzkxMTUyMDExMTAwNDYuanBnfDZhZDIyMzBhYzc0ZDE0NTBkMDgxMmFiMmRiZWNjMDE2NWRjODBmYWE4MjlhNDQxYjc1OWJlZDM0MzVmZjUzMWY","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Graceful Bloom 阔手镯, 镀香槟金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjI5NDd8aW1hZ2UvanBlZ3xoYmMvaGUzLzkwMTUwMDEyMTkxMDIuanBnfGI2YzFiYTY1ZThkMmZjZGNlZTE3ZDk5MGJhZWZkMGExMzI5NjM0MWQyZDdlMDY1ODU0OGYxMmQ1N2ViODZkMGU","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"No Regrets Ice Cream 手链, 彩色设计, 镀金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjQ0ODJ8aW1hZ2UvanBlZ3xoZjYvaDBiLzkxMTA5NDE4MjcxMDIuanBnfGMwZDUwZWEzY2E4ODNkZmFjOWI5MzFhZTU5ZmFjYWNiNjkzYTUxYmU2ZDA2Nzg3Y2VmYzA4NDA1ZjE2ZWQxY2M","price":" 990.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Organic 手链, 彩色设计, 镀白金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjQ1NDJ8aW1hZ2UvanBlZ3xoNzAvaDI0LzkxMTA5NzkzNzkyMzAuanBnfGNhNGExMDBjZjA2NmUxZTc2MThiYTA2Y2FlNGYzZmNjNDZmNzZiOTMzZmIyZTc3OWE3NjUwNGFkNGI2YTZlZGU","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Oxygen 手镯, 灰色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjIxNTB8aW1hZ2UvanBlZ3xoY2EvaDMzLzkxMTUyNDM3NzM5ODIuanBnfDUzZGJkMmY4NGQ3MWI5ZTgxZjY0NmRmMTNhMWNhNjk5YjU5OTBmZTMzNjU3Y2QwMGQ0OWYyMTNhODVlZjFjZmY","price":" 1,190.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Ocean 手链, 彩色设计, 混搭多种镀层","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MTkwNjZ8aW1hZ2UvanBlZ3xoY2IvaDcxLzkxMTUyNzE1OTQwMTQuanBnfDNmYmU1ZjBkZGRiMDBlODEwNjU5NzY5Njc1MjA4ZTdkOWQ1ZDVlYzE4MmYwZmNkMWFjZmU1YWY2ZTc5NzA4ZTc","price":" 1,290.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Oxygen 手镯, 红色, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjI0NDJ8aW1hZ2UvanBlZ3xoZDkvaDllLzkxNTM3MTgxNTczNDIuanBnfDY2MjQ0ZGZiMjcyMzc2ZDUzYWZjYzFjNmEyNzczNTAzN2U3MWMwMzgxZjY4OGMyNjg5N2RjOTU3ZWUzZjFmODM","price":" 1,490.00","types":{"nameZ":"手链","nameE":"bracelet"}},
{"title":"Swarovski Remix Collection Pearl Strand, 彩色设计, 镀玫瑰金色","img":"https://www.swarovski.com.cn/medias/?context=bWFzdGVyfHJvb3R8MjU3NTV8aW1hZ2UvanBlZ3xoM2UvaDg1LzkxMTQ2MjU2Mzg0MzAuanBnfGMxNzk4ZmU3NjRmYWIyOTI1MzZmODI4MGZlMGUxNjk1ZjdhYzYxNDc4NTBiZDhjOWIwNGU3Mjc2NWVkYmIyNjA","price":" 890.00","types":{"nameZ":"手链","nameE":"bracelet"}}]