import Navbar from '@/components/Navbar'
// import HeroSec from '@/components/HeroSec'
import Image from 'next/image'
// import HeroSecV2 from '@/components/HeroSecV2';
import HeroSecV3 from '@/components/HeroSecV3';

// const fetchPrice = async () => {
//   const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd');
//   const data = await response.json();

//   const ethPriceInUSD = data.ethereum.usd;
//   const btcPriceInUSD = data.bitcoin.usd;

//   const ethToBtcConversionRate = ethPriceInUSD / btcPriceInUSD;
//   return (ethToBtcConversionRate)
// };
// const fetchPriceOppo = async () => {
//   const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=ethereum,bitcoin&vs_currencies=usd');
//   const data = await response.json();

//   const ethPriceInUSD = data.ethereum.usd;
//   const btcPriceInUSD = data.bitcoin.usd;

//   const btcToEthConversionRate = btcPriceInUSD/ethPriceInUSD;
//   return (btcToEthConversionRate)
// };
const fetchPriceAll = async () => {
  const response = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd');
  const data = await response.json();
  const transformedData = data.map((crypto:any) => ({
    value: crypto.id,
    label: crypto.name,
    price: crypto.current_price
  }));
  return (transformedData)
};
export default async function Home() {
  // const fetched=await fetchPrice()
  // const fetchedOppo=await fetchPriceOppo()
  const FetchAllCurrency=await fetchPriceAll()
  console.log(FetchAllCurrency, "All Currencies")
  return (
    <main className='bg-gradient-to-r from-[#47509b] to-[#414fba] h-screen'>
      <div>
        <div className="">
          <Navbar />
        </div>
        {/* <HeroSec data={fetched} dataoppo={fetchedOppo}/> */}
        {/* <HeroSecV2 labels={FetchAllCurrency}/> */}
        <HeroSecV3 labels={FetchAllCurrency}/>
      </div>

    </main>
  )
}
