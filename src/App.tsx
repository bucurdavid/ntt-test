import WormholeConnect, {
  WormholeConnectConfig,
  nttRoutes,
} from "@wormhole-foundation/wormhole-connect";

import "./App.css"; // Ensure your styles are here

const wormholeConfig: WormholeConnectConfig = {
  network: "Testnet",
  chains: ["BaseSepolia", "Solana"],
  tokens: ["VTHEUM_base", "VTHEUM_sol"],
  ui: {
    title: "Itheum Portal",
    defaultInputs: {
      fromChain: "Solana",
      toChain: "BaseSepolia",
    },
    showHamburgerMenu: true,
  },
  routes: [
    ...nttRoutes({
      tokens: {
        WSV_NTT: [
          {
            chain: "BaseSepolia",
            manager: "0x49Cb11b462A46F1eE5d8b97e164cbF8A58120d02",
            token: "0xF6b4597f467846dcfC832757F4a35eeF987e0A03",
            transceiver: [
              {
                address: "0x0e7dE46C84065D11f546bAc382453aD0c89044E1",
                type: "wormhole",
              },
            ],
          },
          {
            chain: "Solana",
            manager: "nttC9BLsPFHg9eqXzJciAjPLKzL6aNT5Pjahrci5e8w",
            token: "9o9VrdbwdrmSSU9JBHSSnNfp8A5nEK6gehDQnr9jW34w",
            transceiver: [
              {
                address: "AjBwXpQ3KHgYmbadxgUg9KKvhqrc88smjPPZaM7jWSGQ",
                type: "wormhole",
              },
            ],
          },
        ],
      },
    }),
  ],
  tokensConfig: {
    VTHEUM_base: {
      key: "VTHEUM_base",
      symbol: "VHT",
      nativeChain: "BaseSepolia",
      displayName: "VTHEUM",
      tokenId: {
        chain: "BaseSepolia",
        address: "0xF6b4597f467846dcfC832757F4a35eeF987e0A03",
      },
      coinGeckoId: "wormhole",
      icon: "https://arweave.net/OFVs8pbHEu1pocyMua-NXjtSCGFURkqT3Jk-rbeBYoQ",
      decimals: 18,
    },

    VTHEUM_sol: {
      key: "VTHEUM_sol",
      symbol: "VHT",
      nativeChain: "Solana",
      displayName: "VTHEUM",
      tokenId: {
        chain: "Solana",
        address: "9o9VrdbwdrmSSU9JBHSSnNfp8A5nEK6gehDQnr9jW34w",
      },
      coinGeckoId: "wormhole",
      icon: "https://arweave.net/OFVs8pbHEu1pocyMua-NXjtSCGFURkqT3Jk-rbeBYoQ",
      decimals: 9,
    },
  },
};

function App() {
  return (
    <div className="wormhole-container">
      <WormholeConnect config={wormholeConfig} />
    </div>
  );
}
export default App;
