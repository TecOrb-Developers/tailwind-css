import logo from './logo.svg';
import './App.css';
// import qw from "./images/"
function App() {
  return (
    <div className="App">
      <div class="container mx-auto">
        <div className=' bg-black rounded-lg mt-5 shadow-2xl'>
          <div class="grid grid-cols-12 bg-gray-800">
            <div class="col-span-2 p-2 text-sm font-medium text-left text-gray-500 border-dotted border-r-2 border-gray-600">Choose One</div>
            <div class="col-span-2 p-2 text-sm font-medium text-left text-gray-500 border-dotted border-r-2 border-gray-600">Singles (drag to place)</div>
            <div class="col-span-6 p-2 text-sm font-medium text-left text-gray-500 border-dotted border-r-2 border-gray-600">You Are Here</div>
            <div class="col-span-2 py-2 text-sm font-medium text-gray-500">EXpiration</div>
          </div>
          <div class="grid grid-cols-12 bg-gray-900">
            <div class="col-span-2 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/strategies.svg" alt="startegy" />
              STRATAGIES</div>
            <div class="col-span-2 p-1 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <div class="grid grid-cols-12">
                <div class="col-span-4 bg-call bg-no-repeat bg-contain  py-6">

                </div>
                <div class="col-span-4 bg-put bg-no-repeat bg-contain  py-6">

                </div>
                <div class="col-span-4 bg-skt bg-no-repeat bg-contain  py-6">

                </div>
              </div>
            </div>
            <div class="col-span-6 p-0 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <div class="grid grid-cols-12">
                <div class="col-span-1 p-2 text-sm font-black pt-6 text-center text-white  bg-Lime">BUY</div>
                <div class="col-span-2 p-2 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">EXPIRATION<span class="block mt-1 text-center text-xs text-gray-500">FEB 02'18 W</span></div>
                <div class="col-span-1 p-2 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">STRIKE <span class="block mt-1 text-center text-xs text-gray-500">157.50</span></div>
                <div class="col-span-1 p-2 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">SIDE<span class="block mt-1 text-center text-xs text-gray-500">CALL</span></div>
                <div class="col-span-2 p-2 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">VOLUME<span class="block mt-1 text-center text-xs text-gray-500">N/A</span></div>
                <div class="col-span-2 p-2 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">OPEN INT<span class="block mt-1 text-center text-xs text-gray-500">479</span></div>
                <div class="col-span-2 p-2 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">LIQUIDITY<span class="block mt-1 text-center text-xs text-gray-500">0.15</span></div>
                <div class="col-span-1 p-2 text-sm font-medium text-center text-white ">POP<span class="block mt-1 text-center text-xs text-gray-500">49%</span></div>
              </div>
            </div>
            <div class="col-span-2 p-0 text-sm font-medium text-gray-400">
              <div class="grid grid-cols-12">
                <div class="col-span-6 p-2 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">-<span class="block mt-1 text-center text-xs text-gray-500">TIME</span></div>
                <div class="col-span-6 p-2 text-sm font-medium text-center text-white ">+<span class="block mt-1 text-center text-xs text-gray-500">TIME</span></div>

              </div>
            </div>
          </div>
          <table class="table-auto rounded-lg mx-auto  w-full">
            {/* <!-- ... --> */}
            <tbody>
              <tr class="bg-Stone text-white hover:bg-gray-600">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6  border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600  border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black  hover:bg-gray-600 px-6 py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone text-white hover:bg-gray-600">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6 py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone text-white hover:bg-gray-600">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black  hover:bg-gray-600 px-6 py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone text-white hover:bg-gray-600">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6 py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6 py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6 py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6 py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6  py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6  py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6  py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6  py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6  py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6  py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
              <tr class="bg-Stone hover:bg-gray-600 text-white">
                <td class="bg-black hover:bg-gray-600 px-6 border-gray-600 border-dotted border-r-2 py-3 text-left text-sm font-medium text-white">MAR 18</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">28.10</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">33.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.90</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">22.22</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">20.20</td>
                <td class="px-6 border-gray-600 bg-gray-500 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.33</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">28.99</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">35.19</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">13.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Lime">10.20</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">23.00</td>
                <td class="px-6 border-gray-600 border-dotted border-r-2 py-3 text-right text-sm font-medium text-Red">14.00</td>
                <td class="bg-black hover:bg-gray-600 px-6  py-3 text-right text-sm font-medium text-white">41d  88</td>
              </tr>
            </tbody>
          </table>
          <div class="grid grid-cols-12 bg-gray-900">
            <div class="col-span-2 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/settings.svg" alt="startegy" />
              SETTING</div>
            <div class="col-span-2 py-4 text-sm font-medium text-center text-gray-500 border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/target.svg" alt="startegy" />
              OPT:STD</div>
            <div class="col-span-2 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/qoutes.svg" alt="startegy" />
              ASK/BID</div>
            <div class="col-span-1 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/qoutes.svg" alt="startegy" />
              ASK/BID</div>
            <div class="col-span-1 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/filter.svg" alt="startegy" />
            </div>
            <div class="col-span-1 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/strategiesa.svg" alt="startegy" />
            </div>
            <div class="col-span-1 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/refresh.svg" alt="startegy" />
            </div>
            <div class="col-span-2 py-4 text-sm font-medium text-center text-white border-dotted border-r-2 border-gray-600">
              <img class="inline mr-2" src="./images/book.svg" alt="startegy" />
              ADD ENTRY</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
