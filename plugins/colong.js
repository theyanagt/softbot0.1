//
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler  = async (m, { conn, args }) => {
  let stiker = false
try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/image|video/.test(mime)) {
      let img = await q.download()
      if (!img) throw 'Reply stiker nya!'
      stiker = await sticker(img, false, 'Amelia メ SOFTBOT\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYahaha', require('awesome-phonenumber')('ArekN メ SOFTLOLI\nAmelia メ SOFTBOT'). getNumber('international'))
    } else if (args[0]) stiker = await sticker(false, args[0], 'Amelia メ SOFTBOT\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nYahaha', require('awesome-phonenumber')('ArekN メ SOFTLOLI\nAmelia メ SOFTBOT'). getNumber('international'))
  } finally {
    if (stiker) conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw 'Conversion failed'
  }
}
handler.help = ['s']
handler.tags = ['sticker']
handler.command = /^s$/i
handler.owner = false

module.exports = handler