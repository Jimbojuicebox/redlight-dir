import xtimg from '../../assets/xt.png'
import mexcimg from '../../assets/mexc.png'
import bitmartimg from '../../assets/bitmartw.png'
import digifineximg from '../../assets/digifinex.png'
import coinstoreimg from '../../assets/coinstore.png'
import dawnswapimg from '../../assets/dawnswap.png'
import multichainimg from '../../assets/multichain.png'
import midnighttradesimg from '../../assets/midnighttrades.png'

export const Exchanges = [
    {
        id: 3,
        name: 'XT.com',
        description: 'A centralised exchange with more than 6 million users. XT.com is a comprehensive trading platform with 800+ tokens. Features include Spot, Margin, Futures and OTC trading.',
        url: 'https://www.xt.com/trade/redlc_usdt',
        button: 'Trade $REDLC',
        discord: 'https://discord.com/invite/tcx84qXNW3',
        coinmarketcap: 'https://coinmarketcap.com/exchanges/xt/',
        twitter: 'https://twitter.com/XTexchange',
        image: xtimg,
        tag: 'cex',
        category: 'exchange',
        signup: 'https://www.xt.com/en/accounts/register?ref=CAHMAAZ',
        nokyc: true,
        highvol: true
    },
    {
        id: 4,
        name: 'MEXC',
        description: 'Centralised exchange with over 10 million users. High liquidity with all the features you would expect.',
        url: 'https://www.mexc.com/exchange/REDLC_USDT',
        button: 'Trade $REDLC',
        discord: 'https://discord.com/invite/EgagWrwjmB',
        coinmarketcap: 'https://coinmarketcap.com/exchanges/mexc/',
        twitter: 'https://twitter.com/MEXC_Global',
        image: mexcimg,
        tag: 'cex',
        category: 'exchange',
        signup: 'https://www.mexc.com/register?inviteCode=1b5sM',
        nokyc: true,
        highvol: true
    },
    {
        id: 1,
        name: 'Dawnswap',
        description: 'The official decentralised exchange on the Redlight Blockchain. Used to swap tokens that are active on the Redlight Blockchain, stake and bridge to the BNB network.',
        url: 'https://dawnswap.finance/',
        button: 'Dawnswap',
        discord: 'https://discord.com/invite/redlightfinance',
        coinmarketcap: '',
        twitter: 'https://twitter.com/redlight',
        image: dawnswapimg,
        tag: 'dex',
        category: 'exchange'
    },
    {
        id: 5,
        name: 'BitMart',
        description: 'Whether you are an individual or an institution, we want to help you buy, sell, and store your cryptocurrency. A centralised exchange with Spot, Margin and Futures trading.',
        url: 'https://www.bitmart.com/trade/en-US?symbol=REDLC_USDT&layout=basic&theme=dark',
        button: 'Trade $REDLC',
        discord: 'https://discord.com/invite/Qmb4pqtNgW',
        coinmarketcap: 'https://coinmarketcap.com/exchanges/bitmart/',
        twitter: 'https://twitter.com/BitMartExchange',
        image: bitmartimg,
        tag: 'cex',
        category: 'exchange',
        highvol: true
    },
    {
        id: 6,
        name: 'DigiFinex',
        description: 'Centralised exchange ranked in the top10 by volume with 4 million users. 300+ tokens listed. Usual suite of features including Spot, Margin and Futures trading.',
        url: 'https://www.digifinex.com/en-ww/trade/USDT/REDLC',
        button: 'Trade $REDLC',
        coinmarketcap: 'https://coinmarketcap.com/exchanges/digifinex/',
        twitter: 'https://twitter.com/digifinex',
        image: digifineximg,
        tag: 'cex',
        category: 'exchange',
        highvol: true
    },
    {
        id: 9,
        name: 'Multichain',
        description: 'A cross chain bridge aiming for zero slippage and low fees. Supporting around 90 different blockchains. Bridge ETH or BTC on to Redlight! ',
        url: 'https://app.multichain.org/#/router',
        button: 'Multichain',
        discord: 'https://discord.com/invite/sxqcWn7std',
        coinmarketcap: '',
        twitter: 'https://twitter.com/MultichainOrg',
        image: multichainimg,
        tag: 'bridge',
        category: 'defi'
    },
    {
        id: 7,
        name: 'Coinstore.com',
        description: 'Centralised exchange aimed at the asian markets. Spot and Futures trading for over 50 cryptocurrencies.',
        url: 'https://www.coinstore.com/#/spot/REDLCUSDT',
        button: 'Trade $REDLC',
        coinmarketcap: 'https://coinmarketcap.com/exchanges/coinstore/',
        twitter: 'https://twitter.com/CoinstoreExc',
        image: coinstoreimg,
        tag: 'cex',
        category: 'exchange'
    },
    {
        id: 2,
        name: 'Midnight Trades',
        description: 'The official NFT marketplace on the Redlight Blockchain. Buy and sell popular NFTs and discover new collections.',
        url: 'https://midnightrades.network/',
        button: 'Midnight Trades',
        discord: 'https://discord.com/invite/redlightfinance',
        coinmarketcap: '',
        twitter: 'https://twitter.com/redlight',
        image: midnighttradesimg,
        tag: 'nft-marketplace',
        category: 'defi'
    },
    /* {
        id: ,
        name: '',
        description: '',
        url: '',
        button: '',
        discord: '',
        coinmarketcap: '',
        twitter: '',
        image: ,
        tag: '',
        category: '',
        signup: '',
        nokyc: false,
        highvol: false
    } */
]