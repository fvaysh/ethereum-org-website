import React from "react"
import { createIcon } from "@chakra-ui/react"

export const SovereigntyGlyphIcon = createIcon({
  displayName: "SovereigntyGlyphIcon",
  viewBox: "0 0 64 64",
  defaultProps: {
    width: "64px",
    height: "64px",
    fill: "none",
    fillRule: "evenodd",
    clipRule: "evenodd",
  },
  path: [
    <path
      d="M8.69901 15.7836C3.89468 15.7836 0 19.6782 0 24.4826V33.8721C0 38.6765 3.89468 42.5711 8.69901 42.5711C13.5033 42.5711 17.398 38.6765 17.398 33.8721V24.4826C17.398 19.6782 13.5033 15.7836 8.69901 15.7836ZM8.25907 20.3867L8.27078 20.4053V26.7503L8.25907 26.7449L2.75427 29.306L2.66684 29.2653L8.25907 20.3867ZM8.25891 27.2133L8.27078 27.2188V32.33L8.25891 32.3355L2.75411 29.7744L8.25891 27.2133ZM8.25888 33.5318L8.27078 33.5263V38.6354L8.25888 38.6518L2.66666 30.9718L8.25888 33.5318ZM8.71115 26.7507V20.4062L14.2911 29.2654L14.2037 29.306L8.71115 26.7507ZM8.71115 32.3299V27.2192L14.2037 29.7746L8.71115 32.3299ZM8.71115 38.635V33.5263L14.2911 30.9719L8.71115 38.635ZM59.3105 20.7141C59.2216 19.9609 59.1013 18.9413 58.5039 17.6968C59.4337 17.6968 59.8312 18.1129 60.1943 18.4929C60.4997 18.8125 60.7807 19.1066 61.3333 19.1066C61.9383 19.1066 62.1472 18.7542 62.356 18.4017C62.5648 18.0493 62.7736 17.6968 63.3786 17.6968C64 17.6968 63.4166 20.99 62.4784 22.7992C61.5186 24.6503 63.3786 26.626 63.3786 26.626H64V31.7284H17.3981V26.626H52.8889C52.8889 26.626 53.8475 24.7059 52.8889 22.7992C52.8424 22.7067 52.7933 22.6097 52.7424 22.5091C51.7982 20.6429 50.2168 17.5171 52.1942 17.6968C52.7786 17.75 52.9907 18.0869 53.1993 18.4181C53.4126 18.7569 53.6221 19.0896 54.2222 19.1066C54.8342 19.1239 55.2185 18.7763 55.6102 18.422C56.0072 18.0629 56.4118 17.6968 57.0689 17.6968C56.4659 18.9385 56.3149 19.8887 56.2039 20.5868C56.0363 21.6409 55.9601 22.1204 54.5577 22.1614C54.5577 23.9424 55.9312 25.5066 57.7864 25.5066C59.6415 25.5066 60.7118 23.9184 61.0151 22.1614C59.5066 22.3768 59.4441 21.847 59.3105 20.7141Z"
      fill="#E8C139"
    />,
    <path
      d="M23.8188 24.7126C23.3246 24.7126 22.924 25.1132 22.924 25.6073V32.747C22.924 33.2412 23.3246 33.6418 23.8188 33.6418C24.3129 33.6418 24.7135 33.2412 24.7135 32.747V25.6073C24.7135 25.1132 24.3129 24.7126 23.8188 24.7126ZM20.2397 24.7126C19.7456 24.7126 19.345 25.1132 19.345 25.6074V32.7471C19.345 33.2412 19.7456 33.6418 20.2397 33.6418C20.7339 33.6418 21.1345 33.2412 21.1345 32.7471V25.6074C21.1345 25.1132 20.7339 24.7126 20.2397 24.7126Z"
      fill="#FEAA47"
    />,
    <mask id="path-3-inside-1_1510_314" fill="white">
      <path d="M8.69901 15.7836C3.89468 15.7836 0 19.6782 0 24.4826V33.8721C0 38.6765 3.89468 42.5711 8.69901 42.5711C13.5033 42.5711 17.398 38.6765 17.398 33.8721V31.7285H63.9998V26.6261H63.3785C63.3785 26.6261 61.5184 24.6504 62.4783 22.7993C63.4165 20.9901 63.9999 17.6969 63.3785 17.6969C62.7735 17.6969 62.5646 18.0494 62.3558 18.4018C62.147 18.7542 61.9382 19.1067 61.3332 19.1067C60.7805 19.1067 60.4995 18.8126 60.1942 18.493C59.8311 18.113 59.4336 17.6969 58.5037 17.6969C59.1012 18.9414 59.2215 19.961 59.3103 20.7142C59.444 21.8471 59.5065 22.3769 61.0149 22.1615C60.7116 23.9185 59.6414 25.5067 57.7862 25.5067C55.9311 25.5067 54.5576 23.9425 54.5576 22.1615C55.96 22.1205 56.0362 21.641 56.2038 20.5869C56.3148 19.8887 56.4658 18.9386 57.0687 17.6969C56.4116 17.6969 56.007 18.0629 55.61 18.4221C55.2184 18.7764 54.8341 19.124 54.2221 19.1067C53.622 19.0897 53.4125 18.757 53.1992 18.4182C52.9906 18.087 52.7785 17.7501 52.194 17.6969C50.2166 17.5172 51.7981 20.643 52.7423 22.5093C52.7932 22.6098 52.8423 22.7068 52.8888 22.7993C53.8474 24.706 52.8888 26.6261 52.8888 26.6261H17.398V24.4826C17.398 19.6782 13.5033 15.7836 8.69901 15.7836Z" />
      <path d="M20.2397 24.7127C19.7455 24.7127 19.3449 25.1133 19.3449 25.6075V32.7471C19.3449 33.2413 19.7455 33.6419 20.2397 33.6419C20.7339 33.6419 21.1345 33.2413 21.1345 32.7471V25.6075C21.1345 25.1133 20.7339 24.7127 20.2397 24.7127Z" />
      <path d="M23.8188 24.7127C23.3246 24.7127 22.924 25.1133 22.924 25.6075V32.7471C22.924 33.2413 23.3246 33.6419 23.8188 33.6419C24.3129 33.6419 24.7135 33.2413 24.7135 32.7471V25.6075C24.7135 25.1133 24.3129 24.7127 23.8188 24.7127Z" />
    </mask>,
    <path
      d="M8.69901 15.7836C3.89468 15.7836 0 19.6782 0 24.4826V33.8721C0 38.6765 3.89468 42.5711 8.69901 42.5711C13.5033 42.5711 17.398 38.6765 17.398 33.8721V31.7285H63.9998V26.6261H63.3785C63.3785 26.6261 61.5184 24.6504 62.4783 22.7993C63.4165 20.9901 63.9999 17.6969 63.3785 17.6969C62.7735 17.6969 62.5646 18.0494 62.3558 18.4018C62.147 18.7542 61.9382 19.1067 61.3332 19.1067C60.7805 19.1067 60.4995 18.8126 60.1942 18.493C59.8311 18.113 59.4336 17.6969 58.5037 17.6969C59.1012 18.9414 59.2215 19.961 59.3103 20.7142C59.444 21.8471 59.5065 22.3769 61.0149 22.1615C60.7116 23.9185 59.6414 25.5067 57.7862 25.5067C55.9311 25.5067 54.5576 23.9425 54.5576 22.1615C55.96 22.1205 56.0362 21.641 56.2038 20.5869C56.3148 19.8887 56.4658 18.9386 57.0687 17.6969C56.4116 17.6969 56.007 18.0629 55.61 18.4221C55.2184 18.7764 54.8341 19.124 54.2221 19.1067C53.622 19.0897 53.4125 18.757 53.1992 18.4182C52.9906 18.087 52.7785 17.7501 52.194 17.6969C50.2166 17.5172 51.7981 20.643 52.7423 22.5093C52.7932 22.6098 52.8423 22.7068 52.8888 22.7993C53.8474 24.706 52.8888 26.6261 52.8888 26.6261H17.398V24.4826C17.398 19.6782 13.5033 15.7836 8.69901 15.7836Z"
      stroke="black"
      mask="url(#path-3-inside-1_1510_314)"
    />,
    <path
      d="M20.2397 24.7127C19.7455 24.7127 19.3449 25.1133 19.3449 25.6075V32.7471C19.3449 33.2413 19.7455 33.6419 20.2397 33.6419C20.7339 33.6419 21.1345 33.2413 21.1345 32.7471V25.6075C21.1345 25.1133 20.7339 24.7127 20.2397 24.7127Z"
      stroke="black"
      mask="url(#path-3-inside-1_1510_314)"
    />,
    <path
      d="M23.8188 24.7127C23.3246 24.7127 22.924 25.1133 22.924 25.6075V32.7471C22.924 33.2413 23.3246 33.6419 23.8188 33.6419C24.3129 33.6419 24.7135 33.2413 24.7135 32.7471V25.6075C24.7135 25.1133 24.3129 24.7127 23.8188 24.7127Z"
      stroke="black"
      mask="url(#path-3-inside-1_1510_314)"
    />,
    <path
      d="M31.2751 52.457C24.7135 52.457 17.8538 45.1223 17.8538 30.4529V23.756V18.0158C17.8538 15.7835 19.9415 13.8701 21.731 13.8701C23.5205 13.8701 25.0118 14.5079 25.31 15.1457C25.31 14.0827 26.4434 12.2756 29.7838 12.2756C32.1698 12.2756 33.3628 13.7638 33.6611 14.5079C33.7605 13.3386 34.7348 11 37.8366 11C40.4612 11 41.9127 12.9134 42.3104 13.8701C42.6086 13.0197 43.8016 11.3189 46.1877 11.3189C49.1702 11.3189 50.0964 13.9374 50.3632 14.5079C50.6614 15.1457 50.6614 23.4371 50.3632 24.3938C50.1368 25.1199 49.7667 25.5631 49.4684 25.6694C49.9655 26.2009 51.1386 27.519 51.8544 28.5395C52.7492 29.8151 52.7492 31.4096 52.7492 33.323C52.7492 36.8309 47.6789 52.457 40.8191 52.457H31.2751Z"
      fill="#FFDD67"
    />,
    <path
      d="M42.3104 13.8701L41.8487 14.062L41.8834 14.1456L41.9452 14.2116L42.3104 13.8701ZM50.3632 14.5079L50.8161 14.2961L50.8161 14.2961L50.3632 14.5079ZM50.3632 24.3938L49.8858 24.245L50.3632 24.3938ZM51.8544 28.5395L51.4451 28.8266L51.8544 28.5395ZM39.3279 30.4529L39.8235 30.3867C39.7979 30.1952 39.6642 30.0355 39.4802 29.9767C39.2962 29.9178 39.0947 29.9702 38.9627 30.1114L39.3279 30.4529ZM41.4156 32.0474L41.9071 32.1393C41.94 31.9634 41.8764 31.7833 41.7403 31.6671C41.6042 31.5509 41.4163 31.5163 41.2478 31.5764L41.4156 32.0474ZM31.2751 51.957C28.1921 51.957 24.9778 50.2341 22.5151 46.6716C20.0518 43.1082 18.3538 37.7139 18.3538 30.4529H17.3538C17.3538 37.8613 19.0856 43.469 21.6925 47.2403C24.3002 51.0125 27.7965 52.957 31.2751 52.957V51.957ZM18.3538 18.0158C18.3538 17.0563 18.8046 16.1403 19.4776 15.4566C20.1562 14.7674 21.0042 14.3701 21.731 14.3701V13.3701C20.6683 13.3701 19.5778 13.9295 18.765 14.7551C17.9468 15.5862 17.3538 16.743 17.3538 18.0158H18.3538ZM21.731 14.3701C22.5697 14.3701 23.3297 14.5201 23.9032 14.7365C24.1902 14.8448 24.4199 14.9657 24.5864 15.0845C24.7591 15.2075 24.8331 15.3061 24.8571 15.3575L25.763 14.9339C25.6379 14.6664 25.4137 14.4461 25.1669 14.2702C24.914 14.0899 24.6031 13.9318 24.2563 13.8009C23.5623 13.539 22.6819 13.3701 21.731 13.3701V14.3701ZM25.81 15.1457C25.81 14.4399 26.6308 12.7756 29.7838 12.7756V11.7756C26.256 11.7756 24.81 13.7255 24.81 15.1457H25.81ZM29.7838 12.7756C31.9356 12.7756 32.963 14.1101 33.197 14.6939L34.1252 14.3219C33.7627 13.4175 32.4041 11.7756 29.7838 11.7756V12.7756ZM34.1593 14.5503C34.2013 14.0563 34.4352 13.285 34.9982 12.646C35.5458 12.0242 36.4276 11.5 37.8366 11.5V10.5C36.1439 10.5 34.9876 11.1451 34.2478 11.985C33.5232 12.8075 33.2203 13.7902 33.1629 14.4655L34.1593 14.5503ZM37.8366 11.5C40.1915 11.5 41.4988 13.2202 41.8487 14.062L42.7721 13.6782C42.3267 12.6066 40.7309 10.5 37.8366 10.5V11.5ZM42.7822 14.0356C43.0333 13.3195 44.0764 11.8189 46.1877 11.8189V10.8189C43.5269 10.8189 42.1839 12.7199 41.8386 13.7046L42.7822 14.0356ZM46.1877 11.8189C48.8047 11.8189 49.6112 14.0801 49.9103 14.7197L50.8161 14.2961C50.5816 13.7947 49.5357 10.8189 46.1877 10.8189V11.8189ZM49.9103 14.7197C49.8975 14.6924 49.9066 14.7024 49.9227 14.7973C49.9362 14.8767 49.95 14.9858 49.9634 15.1246C49.9901 15.4013 50.0129 15.7711 50.0314 16.2082C50.0683 17.0809 50.0869 18.1996 50.0869 19.3313C50.0869 20.4628 50.0683 21.6018 50.0314 22.515C50.0129 22.972 49.99 23.3683 49.9629 23.6769C49.9343 24.0037 49.9046 24.1848 49.8858 24.245L50.8405 24.5426C50.8963 24.3636 50.9318 24.0763 50.9591 23.7641C50.9881 23.4336 51.0117 23.0202 51.0305 22.5554C51.0682 21.625 51.0869 20.4719 51.0869 19.3313C51.0869 18.1908 51.0682 17.0572 51.0305 16.166C51.0117 15.7211 50.9879 15.331 50.9587 15.0285C50.9442 14.8777 50.9277 14.7423 50.9085 14.6298C50.892 14.5327 50.8661 14.4031 50.8161 14.2961L49.9103 14.7197ZM49.8858 24.245C49.7865 24.5636 49.6604 24.8042 49.5401 24.9677C49.4124 25.1411 49.3187 25.1919 49.3006 25.1984L49.6363 26.1404C49.9164 26.0405 50.1569 25.8166 50.3455 25.5604C50.5414 25.2941 50.7135 24.9501 50.8405 24.5426L49.8858 24.245ZM49.1032 26.0109C49.5963 26.5381 50.75 27.8356 51.4451 28.8266L52.2638 28.2524C51.5273 27.2024 50.3347 25.8637 49.8336 25.3279L49.1032 26.0109ZM51.4451 28.8266C52.2319 29.9483 52.2492 31.3659 52.2492 33.323H53.2492C53.2492 31.4533 53.2665 29.6819 52.2638 28.2524L51.4451 28.8266ZM52.2492 33.323C52.2492 34.1229 51.9511 35.6984 51.3705 37.65C50.7949 39.5851 49.9563 41.8411 48.9074 43.9858C47.8565 46.1346 46.6059 48.148 45.2142 49.6167C43.8169 51.0914 42.3364 51.957 40.8191 51.957V52.957C42.7318 52.957 44.4574 51.8693 45.9401 50.3045C47.4285 48.7337 48.7316 46.6213 49.8057 44.4251C50.8819 42.2248 51.7396 39.9165 52.329 37.9351C52.9135 35.9703 53.2492 34.277 53.2492 33.323H52.2492ZM31.2751 52.957H40.8191V51.957H31.2751V52.957ZM49.7812 25.2793C49.1649 24.7851 48.1261 24.0502 46.9925 23.436C45.8784 22.8323 44.591 22.2993 43.5034 22.2993V23.2993C44.3246 23.2993 45.4232 23.723 46.5161 24.3152C47.5896 24.8969 48.5789 25.597 49.1556 26.0595L49.7812 25.2793ZM30.0821 22.2993C29.7423 22.2993 29.4369 22.5057 29.2236 22.6903C28.9864 22.8956 28.7529 23.1714 28.5479 23.4782C28.145 24.0814 27.7926 24.8959 27.7926 25.6694H28.7926C28.7926 25.1673 29.0367 24.5467 29.3794 24.0337C29.5472 23.7825 29.7238 23.5799 29.878 23.4464C30.0562 23.2922 30.1236 23.2993 30.0821 23.2993V22.2993ZM27.7926 25.6694C27.7926 26.1376 28.0462 26.7179 28.4028 27.2746C28.7744 27.8544 29.3089 28.4873 29.9753 29.0742C31.3051 30.2451 33.2074 31.2718 35.4506 31.2718V30.2718C33.5183 30.2718 31.8415 29.385 30.6362 28.3237C30.0351 27.7944 29.563 27.2315 29.2448 26.735C28.9118 26.2153 28.7926 25.8389 28.7926 25.6694H27.7926ZM35.4506 31.2718C37.1075 31.2718 38.0293 31.2722 38.5687 31.2304C38.8386 31.2095 39.0596 31.1755 39.2456 31.1039C39.4559 31.0229 39.5871 30.9077 39.6931 30.7944L38.9627 30.1114C38.9195 30.1576 38.9091 30.1619 38.8864 30.1706C38.8393 30.1887 38.736 30.2145 38.4914 30.2334C38.0018 30.2714 37.1341 30.2718 35.4506 30.2718V31.2718ZM38.8323 30.5191C38.8897 30.9489 39.0788 31.5837 39.4996 32.0539C39.7167 32.2966 40.0044 32.5044 40.3716 32.6015C40.7403 32.699 41.1474 32.6738 41.5835 32.5184L41.2478 31.5764C40.968 31.6761 40.7688 31.6722 40.6272 31.6347C40.4843 31.597 40.3582 31.5139 40.2448 31.3871C40.0045 31.1186 39.8655 30.701 39.8235 30.3867L38.8323 30.5191ZM40.9242 31.9555C40.8703 32.2436 40.8076 32.7147 40.7892 33.217C40.7712 33.7089 40.7933 34.2823 40.9383 34.7474L41.893 34.4498C41.7994 34.1495 41.7717 33.713 41.7885 33.2536C41.805 32.8044 41.8616 32.3826 41.9071 32.1393L40.9242 31.9555ZM24.8571 15.3575C25.1189 15.9173 25.7048 17.8197 25.7048 20.567H26.7048C26.7048 17.7016 26.0977 15.6497 25.763 14.9339L24.8571 15.3575ZM25.7048 20.567V24.3938H26.7048V20.567H25.7048ZM25.7048 24.3938C25.7048 24.7268 25.468 25.4941 24.8893 26.1856C24.3298 26.8542 23.4921 27.4017 22.3275 27.4017V28.4017C23.8472 28.4017 24.9482 27.6735 25.6562 26.8274C26.3451 26.0042 26.7048 25.0175 26.7048 24.3938H25.7048ZM18.3538 30.4529V23.756H17.3538V30.4529H18.3538ZM18.3538 23.756V18.0158H17.3538V23.756H18.3538ZM22.3275 27.4017C21.083 27.4017 20.0941 27.0331 19.4219 26.4169C18.7544 25.8052 18.3538 24.9087 18.3538 23.756H17.3538C17.3538 25.1545 17.8479 26.3308 18.7462 27.1541C19.6398 27.9731 20.8878 28.4017 22.3275 28.4017V27.4017ZM25.7955 24.6809C25.9742 24.9357 26.3537 25.3565 26.7913 25.6861C27.0113 25.8518 27.2667 26.0103 27.5364 26.1078C27.8041 26.2045 28.1327 26.2572 28.4604 26.1404L28.1247 25.1984C28.0945 25.2092 28.0205 25.2194 27.8762 25.1672C27.734 25.1159 27.568 25.0192 27.3929 24.8873C27.0402 24.6217 26.7336 24.277 26.6141 24.1067L25.7955 24.6809ZM34.2576 22.2993H30.0821V23.2993H34.2576V22.2993ZM33.178 14.637C33.3597 15.3168 33.7576 17.9643 33.7576 22.7993H34.7576C34.7576 17.9397 34.3602 15.1872 34.1441 14.3788L33.178 14.637ZM43.5034 22.2993H42.6086V23.2993H43.5034V22.2993ZM42.6086 22.2993H34.2576V23.2993H42.6086V22.2993ZM41.9452 14.2116C41.8973 14.1604 41.8742 14.1125 41.8677 14.0986C41.8586 14.0794 41.8544 14.0662 41.8538 14.0641C41.8524 14.06 41.8554 14.0687 41.861 14.0976C41.872 14.1539 41.8861 14.249 41.9018 14.3948C41.9328 14.6842 41.9665 15.1399 41.9973 15.8143C42.059 17.1616 42.1086 19.3588 42.1086 22.7993H43.1086C43.1086 19.3515 43.0589 17.1373 42.9963 15.7686C42.965 15.0851 42.9303 14.6066 42.8961 14.2881C42.8791 14.13 42.8614 14.0027 42.8425 13.9059C42.8332 13.8583 42.8216 13.8078 42.8065 13.7603C42.7995 13.7383 42.766 13.6253 42.6756 13.5286L41.9452 14.2116Z"
      fill="black"
      fill-opacity="0.5"
    />,
    <mask
      id="mask0_1510_314"
      // style="mask-type:alpha"
      style={{ maskType: "alpha" }}
      maskUnits="userSpaceOnUse"
      x="17"
      y="23"
      width="25"
      height="30"
    >
      <path
        d="M17.8538 30.4529C17.8538 45.1223 24.7135 52.457 31.2751 52.457L41.4156 34.5986C41.177 33.8332 41.3162 32.5789 41.4156 32.0474C39.984 32.5576 39.4273 31.197 39.3279 30.4529C39.0296 30.7718 38.791 30.7718 35.4506 30.7718C31.2751 30.7718 28.2926 26.945 28.2926 25.6694C27.5768 25.9245 26.5031 24.819 26.2048 24.3938C26.2048 25.3505 25.0118 27.9017 22.3275 27.9017C19.6433 27.9017 17.8538 26.3072 17.8538 23.756V30.4529Z"
        fill="#C4C4C4"
      />
    </mask>,
    <g mask="url(#mask0_1510_314)">
      <mask id="path-7-inside-2_1510_314" fill="white">
        <path d="M0.853271 24.1346C0.853271 19.5225 4.59216 15.7836 9.20432 15.7836C13.8165 15.7836 17.5554 19.5225 17.5554 24.1346V26.626H53.9206L51.8542 22.7992V17.6968H56.534L54.1232 22.1614L57.2228 23.437L60.3223 22.1614L57.9116 17.6968H62.5913V22.7992L60.5249 26.626H63.1878V31.7284H17.5554V34.2201C17.5554 38.8323 13.8165 42.5711 9.20432 42.5711C4.59216 42.5711 0.853271 38.8323 0.853271 34.2201V24.1346ZM11.6662 29.1773C13.3927 28.223 14.5729 26.2963 14.5729 24.0749C14.5729 20.9047 12.1693 18.3347 9.20433 18.3347C6.23937 18.3347 3.8358 20.9047 3.8358 24.0749C3.8358 26.2963 5.01587 28.2229 6.74228 29.1772C5.0158 30.1315 3.83567 32.0582 3.83567 34.2796C3.83567 37.4498 6.23924 40.0198 9.2042 40.0198C12.1692 40.0198 14.5727 37.4498 14.5727 34.2796C14.5727 32.0583 13.3927 30.1316 11.6662 29.1773ZM60.3223 22.7992L57.2228 28.5394L54.1232 22.7992L57.2228 24.0748L60.3223 22.7992Z" />
      </mask>
      <path
        d="M0.853271 24.1346C0.853271 19.5225 4.59216 15.7836 9.20432 15.7836C13.8165 15.7836 17.5554 19.5225 17.5554 24.1346V26.626H53.9206L51.8542 22.7992V17.6968H56.534L54.1232 22.1614L57.2228 23.437L60.3223 22.1614L57.9116 17.6968H62.5913V22.7992L60.5249 26.626H63.1878V31.7284H17.5554V34.2201C17.5554 38.8323 13.8165 42.5711 9.20432 42.5711C4.59216 42.5711 0.853271 38.8323 0.853271 34.2201V24.1346ZM11.6662 29.1773C13.3927 28.223 14.5729 26.2963 14.5729 24.0749C14.5729 20.9047 12.1693 18.3347 9.20433 18.3347C6.23937 18.3347 3.8358 20.9047 3.8358 24.0749C3.8358 26.2963 5.01587 28.2229 6.74228 29.1772C5.0158 30.1315 3.83567 32.0582 3.83567 34.2796C3.83567 37.4498 6.23924 40.0198 9.2042 40.0198C12.1692 40.0198 14.5727 37.4498 14.5727 34.2796C14.5727 32.0583 13.3927 30.1316 11.6662 29.1773ZM60.3223 22.7992L57.2228 28.5394L54.1232 22.7992L57.2228 24.0748L60.3223 22.7992Z"
        fill="#E8C139"
      />
      <path
        d="M17.5554 26.626H17.0554V27.126H17.5554V26.626ZM53.9206 26.626V27.126H54.7588L54.3605 26.3885L53.9206 26.626ZM51.8542 22.7992H51.3542V22.9256L51.4143 23.0368L51.8542 22.7992ZM51.8542 17.6968V17.1968H51.3542V17.6968H51.8542ZM56.534 17.6968L56.9739 17.9344L57.3722 17.1968H56.534V17.6968ZM54.1232 22.1614L53.6833 21.9239L53.4194 22.4125L53.9329 22.6238L54.1232 22.1614ZM57.2228 23.437L57.0325 23.8994L57.2228 23.9777L57.413 23.8994L57.2228 23.437ZM60.3223 22.1614L60.5126 22.6238L61.0261 22.4125L60.7622 21.9239L60.3223 22.1614ZM57.9116 17.6968V17.1968H57.0733L57.4716 17.9344L57.9116 17.6968ZM62.5913 17.6968H63.0913V17.1968H62.5913V17.6968ZM62.5913 22.7992L63.0312 23.0368L63.0913 22.9256V22.7992H62.5913ZM60.5249 26.626L60.085 26.3885L59.6867 27.126H60.5249V26.626ZM63.1878 26.626H63.6878V26.126H63.1878V26.626ZM63.1878 31.7284V32.2284H63.6878V31.7284H63.1878ZM17.5554 31.7284V31.2284H17.0554V31.7284H17.5554ZM11.6662 29.1773L11.4244 28.7397L10.6327 29.1773L11.4244 29.6149L11.6662 29.1773ZM6.74228 29.1772L6.98416 29.6148L7.77582 29.1772L6.98417 28.7396L6.74228 29.1772ZM57.2228 28.5394L56.7828 28.777L57.2228 29.5918L57.6627 28.777L57.2228 28.5394ZM60.3223 22.7992L60.7622 23.0368L61.4282 21.8034L60.132 22.3369L60.3223 22.7992ZM54.1232 22.7992L54.3135 22.3369L53.0173 21.8034L53.6833 23.0368L54.1232 22.7992ZM57.2228 24.0748L57.0325 24.5372L57.2228 24.6155L57.413 24.5372L57.2228 24.0748ZM9.20432 15.2836C4.31602 15.2836 0.353271 19.2463 0.353271 24.1346H1.35327C1.35327 19.7986 4.8683 16.2836 9.20432 16.2836V15.2836ZM18.0554 24.1346C18.0554 19.2463 14.0926 15.2836 9.20432 15.2836V16.2836C13.5403 16.2836 17.0554 19.7986 17.0554 24.1346H18.0554ZM18.0554 26.626V24.1346H17.0554V26.626H18.0554ZM53.9206 26.126H17.5554V27.126H53.9206V26.126ZM51.4143 23.0368L53.4806 26.8636L54.3605 26.3885L52.2942 22.5617L51.4143 23.0368ZM51.3542 17.6968V22.7992H52.3542V17.6968H51.3542ZM56.534 17.1968H51.8542V18.1968H56.534V17.1968ZM54.5632 22.399L56.9739 17.9344L56.094 17.4593L53.6833 21.9239L54.5632 22.399ZM57.413 22.9747L54.3135 21.6991L53.9329 22.6238L57.0325 23.8994L57.413 22.9747ZM60.132 21.6991L57.0325 22.9747L57.413 23.8994L60.5126 22.6238L60.132 21.6991ZM57.4716 17.9344L59.8823 22.399L60.7622 21.9239L58.3515 17.4593L57.4716 17.9344ZM62.5913 17.1968H57.9116V18.1968H62.5913V17.1968ZM63.0913 22.7992V17.6968H62.0913V22.7992H63.0913ZM60.9649 26.8636L63.0312 23.0368L62.1513 22.5617L60.085 26.3885L60.9649 26.8636ZM63.1878 26.126H60.5249V27.126H63.1878V26.126ZM63.6878 31.7284V26.626H62.6878V31.7284H63.6878ZM17.5554 32.2284H63.1878V31.2284H17.5554V32.2284ZM18.0554 34.2201V31.7284H17.0554V34.2201H18.0554ZM9.20432 43.0711C14.0926 43.0711 18.0554 39.1084 18.0554 34.2201H17.0554C17.0554 38.5561 13.5403 42.0711 9.20432 42.0711V43.0711ZM0.353271 34.2201C0.353271 39.1084 4.31602 43.0711 9.20432 43.0711V42.0711C4.8683 42.0711 1.35327 38.5561 1.35327 34.2201H0.353271ZM0.353271 24.1346V34.2201H1.35327V24.1346H0.353271ZM14.0729 24.0749C14.0729 26.1192 12.9873 27.8758 11.4244 28.7397L11.9081 29.6149C13.7981 28.5702 15.0729 26.4734 15.0729 24.0749H14.0729ZM9.20433 18.8347C11.8621 18.8347 14.0729 21.1488 14.0729 24.0749H15.0729C15.0729 20.6606 12.4764 17.8347 9.20433 17.8347V18.8347ZM4.3358 24.0749C4.3358 21.1488 6.54651 18.8347 9.20433 18.8347V17.8347C5.93223 17.8347 3.3358 20.6606 3.3358 24.0749H4.3358ZM6.98417 28.7396C5.42125 27.8757 4.3358 26.1192 4.3358 24.0749H3.3358C3.3358 26.4733 4.61049 28.5701 6.50038 29.6148L6.98417 28.7396ZM4.33567 34.2796C4.33567 32.2353 5.42118 30.4788 6.98416 29.6148L6.5004 28.7396C4.61042 29.7843 3.33567 31.8811 3.33567 34.2796H4.33567ZM9.2042 39.5198C6.54638 39.5198 4.33567 37.2057 4.33567 34.2796H3.33567C3.33567 37.6939 5.9321 40.5198 9.2042 40.5198V39.5198ZM14.0727 34.2796C14.0727 37.2057 11.862 39.5198 9.2042 39.5198V40.5198C12.4763 40.5198 15.0727 37.6939 15.0727 34.2796H14.0727ZM11.4244 29.6149C12.9873 30.4788 14.0727 32.2353 14.0727 34.2796H15.0727C15.0727 31.8812 13.798 29.7844 11.9081 28.7397L11.4244 29.6149ZM57.6627 28.777L60.7622 23.0368L59.8823 22.5617L56.7828 28.3019L57.6627 28.777ZM53.6833 23.0368L56.7828 28.777L57.6627 28.3019L54.5632 22.5617L53.6833 23.0368ZM57.413 23.6125L54.3135 22.3369L53.9329 23.2616L57.0325 24.5372L57.413 23.6125ZM60.132 22.3369L57.0325 23.6125L57.413 24.5372L60.5126 23.2616L60.132 22.3369Z"
        fill="black"
        mask="url(#path-7-inside-2_1510_314)"
      />
      <path
        d="M23.8188 24.7126C23.3246 24.7126 22.924 25.1132 22.924 25.6073V32.747C22.924 33.2412 23.3246 33.6418 23.8188 33.6418C24.3129 33.6418 24.7135 33.2412 24.7135 32.747V25.6073C24.7135 25.1132 24.3129 24.7126 23.8188 24.7126ZM20.2397 24.7126C19.7456 24.7126 19.345 25.1132 19.345 25.6074V32.7471C19.345 33.2412 19.7456 33.6418 20.2397 33.6418C20.7339 33.6418 21.1345 33.2412 21.1345 32.7471V25.6074C21.1345 25.1132 20.7339 24.7126 20.2397 24.7126Z"
        fill="#FEAA47"
      />
    </g>,
  ],
})