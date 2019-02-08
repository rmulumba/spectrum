// @flow
import React from 'react';
//$FlowFixMe
import styled from 'styled-components';

export const Svg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: none;
  width: 160px;
  height: 24px;
  top: 4px;
  position: relative;
  color: inherit;
`;

export const Logo = () => {
  return (
    <SvgWrapper>
      <Svg
        width="213px"
        height="105px"
        viewBox="0 0 213 105"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id="title">Logo</title>
        <desc>Created with Sketch.</desc>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g
            id="Keyy-Logo---White"
            transform="translate(-38.000000, -92.000000)"
            fill="#FFFFFF"
          >
            <path d="M134.992796,138 L106.016182,138 C105.621249,131.32176 112.513466,125.111782 120.313392,125.001787 C128.546471,124.882365 135.250776,130.762359 134.992796,138 Z M234.651429,114.436275 C230.147423,126.551863 224.289394,141.941251 219.973447,153.472232 C219.772851,154.012599 219.534643,154.537165 219.199272,155.342975 C218.901512,154.590886 218.741662,154.205361 218.597484,153.816676 C214.397506,142.589059 208.401567,126.643504 203.881889,114.436275 L186.295265,114.436275 C181.744245,126.735145 176.218453,141.527286 171.689372,153.636554 C171.504448,154.12636 171.275643,154.597206 170.94654,155.358775 C170.661318,154.597206 170.510871,154.205361 170.366692,153.813516 C166.27955,142.889263 160.258537,126.731985 155.71065,114.436275 L139.337005,114.436275 C140.214612,116.733623 141.308487,119.634538 142.035647,121.511601 C141.248935,120.57623 140.361925,119.707219 139.415363,118.93933 C138.669396,118.338922 137.895221,117.776435 137.092837,117.255029 C134.300166,115.444327 131.197197,114.139231 127.962587,113.383982 C124.492904,112.571852 119.456064,112.672973 115.948769,113.118538 C103.370776,114.714358 94.1339587,124.504158 91.6703896,136.088859 C91.0560645,138.983455 90.8178567,141.941251 90.9275577,144.899047 C90.9871096,146.456946 91.1406909,148.011685 91.3475555,149.556944 C91.4917338,150.637677 91.4290476,153.469072 92.096656,154.303322 C85.5271383,146.058781 79.23344,138.161845 72.9178016,130.236468 C73.3315307,129.718221 73.6449619,129.304256 73.9803333,128.909252 C75.9330096,126.630864 77.8512085,124.320875 79.7850789,122.029847 C81.7314866,119.723019 83.67476,117.419351 85.6211676,115.115683 C87.564441,112.808855 89.5108487,110.502026 91.4572564,108.198358 C93.4036641,105.89153 95.3500717,103.584702 97.2964794,101.274713 C99.2052754,99.0121258 101.107803,96.736898 103.026002,94.4806303 C103.706147,93.6811406 104.307935,92.8437303 104.925395,92 L83.9255049,92 C79.534334,97.6090686 75.1494316,103.227617 70.7457234,108.827206 C66.0442556,114.805999 61.4681602,120.885913 56.5786337,126.706705 C56.1962477,127.15859 55.9549056,127.411393 55.1995365,128.147682 L55.1995365,126.084177 C55.1995365,117.631074 55.2026708,102.987454 55.1964022,92 L38.0047015,92 C37.9984328,114.164511 37.9984328,148.337169 38.0047015,173.212994 L55.1995365,173.212994 C55.1995365,163.976201 55.2026708,153.642874 55.2089394,148.38773 C57.124004,146.014541 59.7442887,142.882943 61.5402494,140.730956 C62.0605452,141.400884 62.480543,141.925451 62.8848692,142.462657 C70.2410992,152.217697 78.6786668,163.407394 86.0317625,173.203513 C91.9524777,173.162433 99.944973,173.190873 105.508377,173.181393 C105.940912,173.181393 106.373447,173.115032 106.968966,173.067632 C106.329566,172.192301 105.821808,171.493933 105.310915,170.795564 C111.999536,174.135725 119.032932,175.175378 126.339013,174.423288 C133.62002,173.674359 140.386999,171.550813 146.085178,166.548472 C143.787728,163.176711 141.606247,159.978752 139.368348,156.692311 C136.390752,159.311984 133.024501,160.819322 129.385565,161.710453 C123.267388,163.211471 117.42503,162.772226 112.284759,158.714736 C109.162984,156.253066 107.423441,152.944506 106.865534,148.729014 L150.416797,148.729014 L150.416797,143.063065 C153.880212,151.181204 157.027061,159.356224 160.405849,167.426963 L160.408984,167.436443 L162.762852,172.776908 L162.850613,172.979151 L163.173447,173.71544 C163.154641,173.77548 163.135835,173.838681 163.117029,173.901882 C162.994791,174.284247 162.860015,174.672931 162.718971,175.045816 C162.230019,176.341432 161.694051,177.472726 161.593753,177.681288 C161.584351,177.703409 161.578082,177.716049 161.578082,177.716049 C161.505993,177.886691 161.427635,178.057333 161.343008,178.231135 C159.700629,181.659777 157.255866,183.344078 153.632601,183.337757 C151.736343,183.337757 149.783666,183.062834 147.956362,182.193823 C147.235471,186.551517 146.370401,191.607579 145.611897,196.186475 C149.08158,196.764762 152.33813,197.166087 155.713784,196.932244 C165.323585,196.259156 171.889968,191.68026 175.485024,182.509827 C181.625141,166.851836 188.003465,151.288645 194.284626,135.687535 C194.507163,135.140848 194.751639,134.600481 195.143428,133.69987 C195.510142,134.600481 195.723276,135.121888 195.93014,135.643294 C200.424743,146.921472 204.746959,158.275491 209.511114,169.436747 C209.674098,169.815952 209.815142,170.185677 209.940514,170.549081 L210.924688,172.780068 L211.012449,172.982311 L211.338417,173.7186 C211.319612,173.778641 211.300806,173.841841 211.278865,173.901882 C211.156627,174.284247 211.021852,174.672931 210.880808,175.045816 C210.633197,175.703104 210.373049,176.319312 210.16305,176.793317 C209.934246,177.513806 209.608277,178.243775 209.182011,178.992704 C207.953361,181.160491 206.417548,182.819511 203.960247,183.050194 C201.415186,183.290357 198.678932,183.299837 196.265512,182.244384 C195.597903,186.292394 194.601192,191.623379 193.848957,196.186475 C197.550579,196.843763 200.979517,197.191367 204.508752,196.888003 C213.71736,196.088513 220.073745,191.617059 223.565368,182.854272 C232.435471,160.591799 241.430946,138.376727 250.373138,116.142695 C250.448361,115.953093 250.708509,115.245244 251,114.436275 L234.651429,114.436275 Z" />
          </g>
        </g>
      </Svg>
    </SvgWrapper>
  );
};
