import React, {Fragment} from 'react';
import {Path} from 'react-native-svg';

export function Calendar(corPrimaria) {
  return (
    <>
      <Path
        fill={corPrimaria}
        d="M18.3741 0.90033H14.7927V2.14004C14.7927 2.69102 14.3515 3.13224 13.8005 3.13224C13.2495 3.13224 12.8083 2.69102 12.8083 2.14004V0.90033H7.18964V2.14004C7.18964 2.69102 6.74841 3.13224 6.19743 3.13224C5.64645 3.13224 5.20523 2.69102 5.20523 2.14004V0.90033H1.62495C0.743604 0.90033 0 1.61705 0 2.52528V19.2754C0 20.1567 0.716716 20.9003 1.62495 20.9003H18.375C19.2564 20.9003 20 20.1836 20 19.2754V2.52638C20 1.61705 19.2833 0.900357 18.374 0.900357L18.3741 0.90033ZM18.3741 19.2753H1.62506V6.35532H18.3752L18.3741 19.2753Z"
      />
    </>
  );
}

export function CalendarChecked(corPrimaria, corSecundaria) {
  return (
    <>
      <Path
        d="M3.24184 6.15685C3.39336 6.30231 3.60525 6.38981 3.78756 6.36026C3.99945 6.36026 4.18175 6.30231 4.33327 6.15685L8.66704 1.99643C8.97008 1.70551 8.97008 1.23958 8.66704 0.948661C8.364 0.657743 7.87865 0.657743 7.57561 0.948661L3.78762 4.5863L2.39315 3.24761C2.09011 2.95669 1.60476 2.95669 1.30172 3.24761C0.998682 3.53853 0.998682 4.00446 1.30172 4.29538L3.24184 6.15685Z"
        fill={corPrimaria}
      />
      <Path
        d="M7.22072 0.607971C7.71976 0.128896 8.52288 0.128896 9.02192 0.607971C9.52096 1.08705 9.52096 1.85804 9.02192 2.33712L4.68815 6.49754C4.4359 6.7397 4.13162 6.83446 3.82566 6.84163C3.45114 6.88448 3.10407 6.70592 2.88706 6.49763L0.946937 4.63617C0.4479 4.15709 0.4478 3.386 0.946837 2.90692C1.44587 2.42785 2.249 2.42785 2.74803 2.90692L3.78756 3.90487L7.22072 0.607971ZM7.93049 1.28935L3.78767 5.26773L2.03826 3.5883C1.93122 3.48554 1.76365 3.48554 1.65661 3.5883C1.5496 3.69103 1.54956 3.85183 1.65651 3.9546L3.59663 5.81606C3.62699 5.84521 3.66136 5.86601 3.68955 5.87683C3.70124 5.88132 3.70896 5.88308 3.71283 5.88375L3.74549 5.87846H3.78755C3.89262 5.87846 3.93807 5.85486 3.97838 5.81616L8.31215 1.65574C8.41919 1.55298 8.41919 1.39211 8.31215 1.28935C8.20513 1.18661 8.03754 1.18664 7.93049 1.28935Z"
        fill={corSecundaria}
      />
    </>
  );
}

export function Relogio(corPrimaria, corSecundaria) {
  return (
    <>
      <Path
        fill={corPrimaria}
        d="M16,2.417C8.51,2.417,2.417,8.51,2.417,16C2.417,23.49,8.51,29.583,16,29.583 c7.489,0,13.583-6.094,13.583-13.583C29.583,8.51,23.49,2.417,16,2.417z M16,28.583C9.062,28.583,3.417,22.939,3.417,16 S9.062,3.417,16,3.417S28.583,9.062,28.583,16S22.939,28.583,16,28.583z M22.132,18.214c-0.055,0.229-0.26,0.384-0.486,0.384 c-0.038,0-0.077-0.004-0.116-0.014l-6.252-1.49c-0.014-0.003-0.024-0.013-0.037-0.017c-0.033-0.011-0.063-0.026-0.093-0.043 c-0.027-0.016-0.052-0.031-0.076-0.051c-0.025-0.021-0.045-0.045-0.065-0.071c-0.02-0.025-0.038-0.049-0.052-0.078 c-0.014-0.028-0.024-0.057-0.033-0.087c-0.01-0.033-0.017-0.064-0.02-0.099c-0.001-0.014-0.008-0.026-0.008-0.041V7.441 c0-0.276,0.224-0.5,0.5-0.5s0.5,0.224,0.5,0.5v8.771l5.869,1.399C22.031,17.676,22.197,17.946,22.132,18.214z"
      />
    </>
  );
}

export function Cutlery(corPrimaria) {
  return (
    <>
      <Path
        fill={corPrimaria}
        d="M8.00008 0.0588379C3.62176 0.0588379 0.059021 3.62158 0.059021 7.9999C0.059021 11.3938 2.20012 14.2963 5.20234 15.4305C5.72054 15.6259 6.26476 15.7701 6.82796 15.8538C7.21046 15.9107 7.6021 15.941 8.00076 15.941C8.84522 15.941 9.65802 15.8074 10.4216 15.562C10.6937 15.4748 10.9588 15.3721 11.2182 15.2568C13.9976 14.02 15.9418 11.2329 15.9418 7.99993C15.9411 3.62161 12.379 0.0588702 8.00001 0.0588702L8.00008 0.0588379ZM11.2176 14.4039V4.10182C11.2176 3.88173 11.0397 3.70386 10.8196 3.70386C10.4582 3.70386 10.1327 3.8494 9.85071 4.13627C8.46556 5.54463 8.50563 10.3252 8.51477 10.8652L8.5211 11.2569H10.4217V14.7485C9.66516 15.0213 8.85023 15.1704 8.0009 15.1704C7.58605 15.1704 7.17965 15.1331 6.78379 15.0649L6.45614 9.24875C7.2134 9.04836 7.77239 8.3607 7.77239 7.54085L7.77169 3.9486C7.77169 3.81922 7.66763 3.71515 7.53825 3.71515C7.40887 3.71515 7.3048 3.81992 7.3048 3.9486V6.77946C7.3048 6.9243 7.18738 7.04172 7.04254 7.04172C6.8977 7.04172 6.78028 6.92429 6.78028 6.77946V3.9486C6.78028 3.80656 6.66497 3.69125 6.52294 3.69125C6.38091 3.69125 6.26559 3.80656 6.26559 3.9486V6.77946C6.26559 6.9243 6.14817 7.04172 6.00333 7.04172C5.85849 7.04172 5.74107 6.92429 5.74107 6.77946V3.9486C5.74107 3.80656 5.62576 3.69125 5.48373 3.69125C5.34169 3.69125 5.22638 3.80656 5.22638 3.9486V6.77946C5.22638 6.9243 5.10896 7.04172 4.96412 7.04172C4.81928 7.04172 4.70186 6.92429 4.70186 6.77946L4.70116 3.9486C4.70116 3.81922 4.59639 3.71515 4.46771 3.71515C4.33904 3.71515 4.23427 3.81992 4.23427 3.9486V7.53942C4.23427 8.35926 4.79326 9.04692 5.55052 9.24731L5.24818 14.6192C2.65708 13.5378 0.830437 10.9784 0.830437 8.00009C0.830437 4.04639 4.0465 0.830329 8.0002 0.830329C11.9539 0.830329 15.17 4.04639 15.17 8.00009C15.17 10.7964 13.5591 13.223 11.2177 14.4041L11.2176 14.4039Z"
      />
    </>
  );
}

export function Refund(corPrimaria, corSecundaria) {
  return (
    <>
      <Path
        fill={corPrimaria}
        d="M12.5998 4.09386L11.7776 5.14955C13.55 6.52783 14.4337 8.76083 14.0848 10.9752C13.8287 12.6008 12.9563 14.0293 11.6258 14.9985C10.2952 15.9663 8.66713 16.3604 7.04144 16.1031C3.68628 15.5746 1.38512 12.415 1.91245 9.05984C2.16852 7.43428 3.04217 6.00581 4.37148 5.03659C5.5326 4.19056 6.92091 3.78511 8.33688 3.86545L7.17953 5.07927L8.03938 5.89896L9.86578 3.9822V3.98345L10.6842 3.12485L9.82687 2.30641L7.91011 0.480011L7.09167 1.33861L8.34064 2.52859C6.64355 2.44825 4.98033 2.94158 3.58698 3.95707C1.96769 5.13576 0.904485 6.87553 0.593198 8.85373C-0.049493 12.9384 2.75097 16.7845 6.83565 17.4272C7.22982 17.49 7.6252 17.5201 8.01686 17.5201C9.58968 17.5201 11.1186 17.0255 12.4154 16.0816C14.0347 14.9029 15.0979 13.1631 15.4092 11.1849C15.8322 8.48864 14.7565 5.77218 12.5999 4.09411L12.5998 4.09386Z"
      />
      <Path
        fill={corSecundaria}
        d="M3.73375 7.84343V7.07271C4.64631 6.97103 5.53505 6.39361 5.53505 5.29904C5.53505 3.81157 4.15175 3.64084 3.14128 3.51657C2.49483 3.44 2.00025 3.34962 2.00025 2.95798C2.00025 2.4132 2.76721 2.35545 3.09736 2.35545C3.58689 2.35545 4.10908 2.58516 4.28733 2.87889L4.3388 2.96425L5.35431 2.49479L5.3041 2.39186C4.92626 1.61864 4.24842 1.39518 3.73504 1.30482V0.626968H2.54632V1.30231C1.44044 1.46549 0.782676 2.07932 0.782676 2.95798C0.782676 4.39022 2.08313 4.53585 3.03209 4.64254C3.87813 4.7417 4.27104 4.95133 4.27104 5.29905C4.27104 5.96433 3.34968 6.01581 3.06725 6.01581C2.43838 6.01581 1.83335 5.702 1.6576 5.28526L1.61367 5.18233L0.511551 5.64928L0.555485 5.75221C0.881843 6.51666 1.58604 6.99492 2.54506 7.10916V7.84221L3.73375 7.84343Z"
      />
    </>
  );
}

export function Pesquisa(corPrimaria) {
  return (
    <>
      <Path
        fill={corPrimaria}
        d="M11.5938 0.0625219C6.99256 0.0625219 3.2464 3.80508 3.2464 8.40636C3.2464 10.2364 3.83892 11.9276 4.84015 13.3038L0.448868 17.6987C-0.0648755 18.2124 -0.0648755 19.0412 0.448868 19.5549C0.703868 19.8099 1.03761 19.9375 1.37512 19.9375C1.71264 19.9375 2.04638 19.8099 2.30138 19.5512L6.69266 15.1599C8.06892 16.1612 9.7601 16.7537 11.5901 16.7537C16.1914 16.7537 19.9339 13.0111 19.9339 8.40622C19.9339 3.80134 16.1952 0.0623779 11.5939 0.0623779L11.5938 0.0625219ZM11.5938 14.1287C8.44 14.1287 5.87128 11.5636 5.87128 8.40612C5.87128 5.25228 8.4364 2.6874 11.5938 2.6874C14.7477 2.6874 17.3126 5.25252 17.3126 8.40612C17.3126 11.5636 14.7474 14.1287 11.5938 14.1287Z"
      />
    </>
  );
}

export function Edit(corPrimaria) {
  return (
    <>
      <Path
        fill={corPrimaria}
        d="M0.0217038 16.1963C-0.0941821 16.7446 0.255203 17.0957 0.803486 16.9781L4.33196 16.2223C4.58448 16.1686 4.93906 15.9732 5.12242 15.7899L16.1349 4.77909C16.3183 4.59575 16.3217 4.29827 16.1436 4.11664L12.8832 0.856272C12.7033 0.678121 12.4059 0.681579 12.2225 0.86319L1.20998 11.8757C1.02664 12.0591 0.831188 12.4171 0.777571 12.6679L0.0217038 16.1963Z"
      />
    </>
  );
}

export function Arrow(corPrimaria) {
  return (
    <>
      <Path
        fill={corPrimaria}
        d="M16.9997 7.99968H1.00032C0.448128 7.99968 7.62957e-08 8.44781 7.62957e-08 9C7.62957e-08 9.55219 0.448128 10.0003 1.00032 10.0003H16.9997C17.5519 10.0003 18 9.55219 18 9C18 8.44781 17.5519 7.99968 16.9997 7.99968ZM9.7068 1.70712C10.0977 1.31618 10.0977 0.683375 9.7068 0.292439C9.3168 -0.0975611 8.68306 -0.0975611 8.29306 0.292439L0.292416 8.29308C-0.0975839 8.68308 -0.0975839 9.31682 0.292416 9.70682L8.29306 17.7075C8.68306 18.0975 9.3168 18.0975 9.7068 17.7075C10.0977 17.3165 10.0977 16.6837 9.7068 16.2928L2.41392 8.9999L9.7068 1.70712Z"
      />
    </>
  );
}

export function PesquisaCodigo(corPrimaria, corSecundaria) {
  return (
    <>
      <Path
        fill={corSecundaria}
        d="M10.51,18.5v1a.51.51,0,0,1-.5.5H8a.5.5,0,0,1-.5-.5v-1A.5.5,0,0,1,8,18h2A.5.5,0,0,1,10.51,18.5ZM10,4H8a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,8,6h2a.51.51,0,0,0,.5-.5v-1A.5.5,0,0,0,10,4Zm0,7H8a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,8,13h2a.5.5,0,0,0,.5-.5v-1A.51.51,0,0,0,10,11Zm14,7H22a.5.5,0,0,0-.5.5v1a.51.51,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,24,18Zm0-7H22a.51.51,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,24,11Zm0-7H22a.5.5,0,0,0-.5.5v1A.51.51,0,0,0,22,6h2a.5.5,0,0,0,.5-.5v-1A.5.5,0,0,0,24,4ZM17,4H15a.5.5,0,0,0-.5.5v1A.5.5,0,0,0,15,6h2a.51.51,0,0,0,.5-.5v-1A.5.5,0,0,0,17,4Zm0,7H15a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-1A.51.51,0,0,0,17,11Zm0,14H15a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h2a.5.5,0,0,0,.5-.5v-1A.51.51,0,0,0,17,25Zm0-7H15a.5.5,0,0,0-.5.5v1a.5.5,0,0,0,.5.5h2a.51.51,0,0,0,.5-.5v-1A.5.5,0,0,0,17,18Z"
      />
      <Path
        fill={corPrimaria}
        d="M10,3H8A1.63,1.63,0,0,0,6.38,4.63v2A1.63,1.63,0,0,0,8,8.25h2a1.63,1.63,0,0,0,1.62-1.62v-2A1.63,1.63,0,0,0,10,3Zm.37,3.63A.38.38,0,0,1,10,7H8a.38.38,0,0,1-.38-.37v-2A.38.38,0,0,1,8,4.25h2a.38.38,0,0,1,.37.38ZM10,17H8a1.63,1.63,0,0,0-1.63,1.62v2A1.63,1.63,0,0,0,8,22.24h2a1.63,1.63,0,0,0,1.62-1.63v-2A1.63,1.63,0,0,0,10,17Zm.37,3.62A.38.38,0,0,1,10,21H8a.38.38,0,0,1-.38-.38v-2A.38.38,0,0,1,8,18.24h2a.38.38,0,0,1,.37.37ZM10,10H8a1.62,1.62,0,0,0-1.63,1.62v2A1.63,1.63,0,0,0,8,15.25h2a1.63,1.63,0,0,0,1.62-1.63v-2A1.62,1.62,0,0,0,10,10Zm.37,3.62A.38.38,0,0,1,10,14H8a.38.38,0,0,1-.38-.38v-2A.37.37,0,0,1,8,11.25h2a.37.37,0,0,1,.37.37ZM24,10H22a1.62,1.62,0,0,0-1.62,1.62v2A1.63,1.63,0,0,0,22,15.25h2a1.63,1.63,0,0,0,1.63-1.63v-2A1.62,1.62,0,0,0,24,10Zm.38,3.62A.38.38,0,0,1,24,14H22a.38.38,0,0,1-.37-.38v-2a.37.37,0,0,1,.37-.37h2a.37.37,0,0,1,.38.37ZM24,3H22a1.63,1.63,0,0,0-1.62,1.63v2A1.63,1.63,0,0,0,22,8.25h2a1.63,1.63,0,0,0,1.63-1.62v-2A1.63,1.63,0,0,0,24,3Zm.38,3.63A.38.38,0,0,1,24,7H22a.38.38,0,0,1-.37-.37v-2A.38.38,0,0,1,22,4.25h2a.38.38,0,0,1,.38.38ZM24,17H22a1.63,1.63,0,0,0-1.62,1.62v2A1.63,1.63,0,0,0,22,22.24h2a1.63,1.63,0,0,0,1.63-1.63v-2A1.63,1.63,0,0,0,24,17Zm.38,3.62A.38.38,0,0,1,24,21H22a.38.38,0,0,1-.37-.38v-2a.38.38,0,0,1,.37-.37h2a.38.38,0,0,1,.38.37ZM17,3H15a1.63,1.63,0,0,0-1.63,1.63v2A1.63,1.63,0,0,0,15,8.25h2a1.63,1.63,0,0,0,1.62-1.62v-2A1.63,1.63,0,0,0,17,3Zm.37,3.63A.38.38,0,0,1,17,7H15a.38.38,0,0,1-.38-.37v-2A.38.38,0,0,1,15,4.25h2a.38.38,0,0,1,.37.38ZM17,17H15a1.63,1.63,0,0,0-1.63,1.62v2A1.63,1.63,0,0,0,15,22.24h2a1.63,1.63,0,0,0,1.62-1.63v-2A1.63,1.63,0,0,0,17,17Zm.37,3.62A.38.38,0,0,1,17,21H15a.38.38,0,0,1-.38-.38v-2a.38.38,0,0,1,.38-.37h2a.38.38,0,0,1,.37.37ZM17,23.75H15a1.63,1.63,0,0,0-1.63,1.63v2A1.63,1.63,0,0,0,15,29h2a1.63,1.63,0,0,0,1.62-1.62v-2A1.63,1.63,0,0,0,17,23.75Zm.37,3.63a.38.38,0,0,1-.37.37H15a.38.38,0,0,1-.38-.37v-2A.38.38,0,0,1,15,25h2a.38.38,0,0,1,.37.38ZM17,10H15a1.62,1.62,0,0,0-1.63,1.62v2A1.63,1.63,0,0,0,15,15.25h2a1.63,1.63,0,0,0,1.62-1.63v-2A1.62,1.62,0,0,0,17,10Zm.37,3.62A.38.38,0,0,1,17,14H15a.38.38,0,0,1-.38-.38v-2a.37.37,0,0,1,.38-.37h2a.37.37,0,0,1,.37.37Z"
      />
    </>
  );
}
