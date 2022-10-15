/* eslint-disable prettier/prettier */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import Svg, {Circle, Rect, Line, Path, Mask} from 'react-native-svg';

function HomeIcon(props) {
  return (
    <Svg
      baseProfile="tiny"
      height={props.size}
      width={props.size}
      id="Layer_1"
      version="1.2"
      viewBox="0 0 24 24"
      fill={props.fill}>
      <Path d="M12,3c0,0-6.186,5.34-9.643,8.232C2.154,11.416,2,11.684,2,12c0,0.553,0.447,1,1,1h2v7c0,0.553,0.447,1,1,1h3  c0.553,0,1-0.448,1-1v-4h4v4c0,0.552,0.447,1,1,1h3c0.553,0,1-0.447,1-1v-7h2c0.553,0,1-0.447,1-1c0-0.316-0.154-0.584-0.383-0.768  C18.184,8.34,12,3,12,3z" />
    </Svg>
  );
}

function SearchIcon({size, ...props}) {
  return (
    <Svg
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill={props.fill}
      height={size}
      width={size}>
      <Path d="M21.71,20.29,18,16.61A9,9,0,1,0,16.61,18l3.68,3.68a1,1,0,0,0,1.42,0A1,1,0,0,0,21.71,20.29ZM11,18a7,7,0,1,1,7-7A7,7,0,0,1,11,18Z" />
    </Svg>
  );
}

function DownloadIcon({size, ...props}) {
  return (
    <Svg
      height={size}
      width={size}
      viewBox="0 0 24 24"
      fill={props.fill}
      xmlns="http://www.w3.org/2000/svg">
      <Path d="M19 9h-4V3H9v6H5l7 8zM4 19h16v2H4z" />
    </Svg>
  );
}

function ReelsIcon({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect
        x="4.5"
        y="4.92661"
        width="20"
        height="20"
        rx="6"
        stroke={fill}
        strokeWidth="2"
      />
      <Path
        d="M5.24609 10.0377H12.5794H23.754M18.6905 9.51394L17.4683 7.4187L16.4207 5.67267M12.4048 9.68854L11.1826 7.5933L10.135 5.84727"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="square"
      />
      <Path
        d="M12.0961 14.6735C12.1137 13.9247 12.918 13.4603 13.5753 13.8195L18.1153 16.3C18.8001 16.6741 18.8116 17.6534 18.1359 18.0436L13.474 20.7351C12.7982 21.1253 11.9559 20.6256 11.9743 19.8455L12.0961 14.6735Z"
        fill={fill}
      />
    </Svg>
  );
}

function ReelsFilled({size, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Mask id="path-1-inside-1_671_353" fill="white">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.8984 3.53983H14.6329L14.7068 3.66446L17.0048 7.53885L17.6535 8.65095H13.5813L12.4465 6.70559L10.6317 3.54481C10.7202 3.5415 10.8091 3.53983 10.8984 3.53983ZM4.15625 8.65095C4.76946 6.45758 6.42421 4.69904 8.55365 3.9422L10.7138 7.70444L10.7138 7.70445L10.7173 7.71038L11.2659 8.65095H4.15625ZM3.89844 18.5398V10.651H12.4326L12.4434 10.6694L12.475 10.651H12.9779H25.8984V18.5398C25.8984 22.4058 22.7644 25.5398 18.8984 25.5398H10.8984C7.03244 25.5398 3.89844 22.4058 3.89844 18.5398ZM18.8984 3.53983C22.1099 3.53983 24.8163 5.70252 25.6406 8.65095H19.9689L19.9528 8.62327L18.7305 6.52804L18.7306 6.52802L18.7268 6.52177L16.9582 3.53983H18.8984ZM13.9737 13.4327C13.3164 13.0735 12.5122 13.5379 12.4945 14.2867L12.3727 19.4588C12.3543 20.2388 13.1967 20.7385 13.8724 20.3483L18.5343 17.6568C19.2101 17.2666 19.1985 16.2873 18.5138 15.9132L13.9737 13.4327Z"
        />
      </Mask>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.8984 3.53983H14.6329L14.7068 3.66446L17.0048 7.53885L17.6535 8.65095H13.5813L12.4465 6.70559L10.6317 3.54481C10.7202 3.5415 10.8091 3.53983 10.8984 3.53983ZM4.15625 8.65095C4.76946 6.45758 6.42421 4.69904 8.55365 3.9422L10.7138 7.70444L10.7138 7.70445L10.7173 7.71038L11.2659 8.65095H4.15625ZM3.89844 18.5398V10.651H12.4326L12.4434 10.6694L12.475 10.651H12.9779H25.8984V18.5398C25.8984 22.4058 22.7644 25.5398 18.8984 25.5398H10.8984C7.03244 25.5398 3.89844 22.4058 3.89844 18.5398ZM18.8984 3.53983C22.1099 3.53983 24.8163 5.70252 25.6406 8.65095H19.9689L19.9528 8.62327L18.7305 6.52804L18.7306 6.52802L18.7268 6.52177L16.9582 3.53983H18.8984ZM13.9737 13.4327C13.3164 13.0735 12.5122 13.5379 12.4945 14.2867L12.3727 19.4588C12.3543 20.2388 13.1967 20.7385 13.8724 20.3483L18.5343 17.6568C19.2101 17.2666 19.1985 16.2873 18.5138 15.9132L13.9737 13.4327Z"
      />
      <Path
        d="M14.6329 3.53983L16.3531 2.51955L15.772 1.53983H14.6329V3.53983ZM14.7068 3.66446L12.9866 4.68474V4.68474L14.7068 3.66446ZM17.0048 7.53885L18.7323 6.53111L18.7287 6.52483L18.725 6.51857L17.0048 7.53885ZM17.6535 8.65095V10.651H21.1356L19.3811 7.64321L17.6535 8.65095ZM13.5813 8.65095L11.8538 9.6587L12.4326 10.651H13.5813V8.65095ZM12.4465 6.70559L10.7121 7.70147L10.719 7.71333L12.4465 6.70559ZM10.6317 3.54481L10.5568 1.54622L7.2491 1.67013L8.89728 4.54067L10.6317 3.54481ZM8.55365 3.9422L10.2881 2.94634L9.45685 1.49862L7.88386 2.05769L8.55365 3.9422ZM4.15625 8.65095L2.23011 8.11246L1.52041 10.651H4.15625V8.65095ZM10.7138 7.70444L11.7368 9.42303L13.4286 8.41599L12.4483 6.70858L10.7138 7.70444ZM10.7138 7.70445L9.69083 5.98587L7.98743 6.9998L8.98621 8.71213L10.7138 7.70445ZM10.7173 7.71038L8.98967 8.71806L8.9897 8.71812L10.7173 7.71038ZM11.2659 8.65095V10.651H14.748L12.9935 7.64321L11.2659 8.65095ZM3.89844 10.651V8.65095H1.89844V10.651H3.89844ZM12.4326 10.651L14.1602 9.64324L13.5814 8.65095H12.4326V10.651ZM12.4434 10.6694L10.7158 11.6771L11.7235 13.4047L13.4511 12.397L12.4434 10.6694ZM12.475 10.651V8.65095H11.9343L11.4672 8.9234L12.475 10.651ZM25.8984 10.651H27.8984V8.65095H25.8984V10.651ZM25.6406 8.65095V10.651H28.2765L27.5668 8.11246L25.6406 8.65095ZM19.9689 8.65095L18.2414 9.65873L18.8202 10.651H19.9689V8.65095ZM19.9528 8.62327L18.2252 9.63102L18.2252 9.63105L19.9528 8.62327ZM18.7305 6.52804L17.7228 4.80048L15.9952 5.80822L17.003 7.53578L18.7305 6.52804ZM18.7306 6.52802L19.7383 8.25558L21.4784 7.24052L20.4508 5.50781L18.7306 6.52802ZM18.7268 6.52177L20.4471 5.50156L20.447 5.5015L18.7268 6.52177ZM16.9582 3.53983V1.53983H13.4466L15.238 4.5601L16.9582 3.53983ZM12.4945 14.2867L14.494 14.3338V14.3338L12.4945 14.2867ZM13.9737 13.4327L14.9327 11.6776L14.9327 11.6776L13.9737 13.4327ZM12.3727 19.4588L10.3733 19.4117L12.3727 19.4588ZM13.8724 20.3483L12.8724 18.6163L12.8724 18.6163L13.8724 20.3483ZM18.5343 17.6568L17.5343 15.9247H17.5343L18.5343 17.6568ZM18.5138 15.9132L19.4727 14.1581L18.5138 15.9132ZM14.6329 1.53983H10.8984V5.53983H14.6329V1.53983ZM16.427 2.64419L16.3531 2.51955L12.9127 4.5601L12.9866 4.68474L16.427 2.64419ZM18.725 6.51857L16.427 2.64419L12.9866 4.68474L15.2846 8.55912L18.725 6.51857ZM19.3811 7.64321L18.7323 6.53111L15.2772 8.54659L15.9259 9.6587L19.3811 7.64321ZM13.5813 10.651H17.6535V6.65095H13.5813V10.651ZM10.719 7.71333L11.8538 9.6587L15.3089 7.64321L14.1741 5.69785L10.719 7.71333ZM8.89728 4.54067L10.7121 7.70145L14.181 5.70973L12.3661 2.54895L8.89728 4.54067ZM10.8984 1.53983C10.7842 1.53983 10.6703 1.54197 10.5568 1.54622L10.7066 5.54341C10.7701 5.54103 10.8341 5.53983 10.8984 5.53983V1.53983ZM7.88386 2.05769C5.1454 3.03099 3.01943 5.28912 2.23011 8.11246L6.08239 9.18945C6.51948 7.62604 7.70303 6.36709 9.22344 5.82671L7.88386 2.05769ZM12.4483 6.70858L10.2881 2.94634L6.81922 4.93806L8.97939 8.7003L12.4483 6.70858ZM11.7368 9.42304L11.7368 9.42303L9.69085 5.98586L9.69083 5.98587L11.7368 9.42304ZM12.4449 6.7027L12.4414 6.69677L8.98621 8.71213L8.98967 8.71806L12.4449 6.7027ZM12.9935 7.64321L12.4448 6.70264L8.9897 8.71812L9.53837 9.6587L12.9935 7.64321ZM4.15625 10.651H11.2659V6.65095H4.15625V10.651ZM1.89844 10.651V18.5398H5.89844V10.651H1.89844ZM12.4326 8.65095H3.89844V12.651H12.4326V8.65095ZM14.1709 9.66168L14.1602 9.64324L10.705 11.6587L10.7158 11.6771L14.1709 9.66168ZM11.4672 8.9234L11.4356 8.94185L13.4511 12.397L13.4827 12.3785L11.4672 8.9234ZM12.9779 8.65095H12.475V12.651H12.9779V8.65095ZM25.8984 8.65095H12.9779V12.651H25.8984V8.65095ZM27.8984 18.5398V10.651H23.8984V18.5398H27.8984ZM18.8984 27.5398C23.869 27.5398 27.8984 23.5104 27.8984 18.5398H23.8984C23.8984 21.3012 21.6599 23.5398 18.8984 23.5398V27.5398ZM10.8984 27.5398H18.8984V23.5398H10.8984V27.5398ZM1.89844 18.5398C1.89844 23.5104 5.92787 27.5398 10.8984 27.5398V23.5398C8.13701 23.5398 5.89844 21.3012 5.89844 18.5398H1.89844ZM27.5668 8.11246C26.5072 4.32259 23.0304 1.53983 18.8984 1.53983V5.53983C21.1895 5.53983 23.1254 7.08245 23.7145 9.18945L27.5668 8.11246ZM19.9689 10.651H25.6406V6.65095H19.9689V10.651ZM18.2252 9.63105L18.2414 9.65873L21.6964 7.64318L21.6803 7.6155L18.2252 9.63105ZM17.003 7.53578L18.2252 9.63102L21.6803 7.61553L20.4581 5.52029L17.003 7.53578ZM17.7228 4.80046L17.7228 4.80048L19.7383 8.25559L19.7383 8.25558L17.7228 4.80046ZM17.0066 7.54198L17.0103 7.54823L20.4508 5.50781L20.4471 5.50156L17.0066 7.54198ZM15.238 4.5601L17.0067 7.54204L20.447 5.5015L18.6784 2.51955L15.238 4.5601ZM18.8984 1.53983H16.9582V5.53983H18.8984V1.53983ZM14.494 14.3338C14.4763 15.0826 13.6721 15.5469 13.0148 15.1878L14.9327 11.6776C12.9608 10.6002 10.548 11.9932 10.4951 14.2396L14.494 14.3338ZM14.3722 19.5058L14.494 14.3338L10.4951 14.2396L10.3733 19.4117L14.3722 19.5058ZM12.8724 18.6163C13.5482 18.2261 14.3905 18.7258 14.3722 19.5058L10.3733 19.4117C10.3182 21.7519 12.8452 23.2508 14.8724 22.0804L12.8724 18.6163ZM17.5343 15.9247L12.8724 18.6163L14.8724 22.0804L19.5343 19.3888L17.5343 15.9247ZM17.5548 17.6683C16.8701 17.2942 16.8585 16.3149 17.5343 15.9247L19.5343 19.3888C21.5616 18.2184 21.527 15.2805 19.4727 14.1581L17.5548 17.6683ZM13.0148 15.1878L17.5548 17.6683L19.4727 14.1581L14.9327 11.6776L13.0148 15.1878Z"
        mask="url(#path-1-inside-1_671_353)"
      />
    </Svg>
  );
}

function ShopIcon({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.34203 11.751C5.435 10.1651 6.74822 8.92661 8.33689 8.92661H20.663C22.2516 8.92661 23.5649 10.1651 23.6578 11.751L24.1293 19.7926C24.2976 22.6641 22.0143 25.0852 19.1378 25.0852H9.86203C6.98557 25.0852 4.70227 22.6641 4.87061 19.7926L5.34203 11.751Z"
        stroke={fill}
        strokeWidth="2"
      />
      <Path
        d="M10.8335 8.81546V7.06944C10.8335 5.3337 12.3969 3.92661 14.3255 3.92661C16.2541 3.92661 17.8176 5.3337 17.8176 7.06944V8.81546"
        stroke={fill}
        strokeWidth="2"
      />
      <Path
        d="M11.0078 12.3074C11.0078 12.3074 11.0078 15.974 14.3253 15.974C17.9919 15.974 17.9919 12.3074 17.9919 12.3074"
        stroke={fill}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function ShopFilled({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 29 29"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.2319 8.19684V6.45082C11.2319 4.71508 12.7954 3.30798 14.724 3.30798C16.6526 3.30798 18.216 4.71508 18.216 6.45082V8.19684"
        stroke={fill}
        strokeWidth="2"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.73531 7.30798C6.6171 7.30798 4.86613 8.95931 4.74217 11.0739L4.27075 19.1155C4.06874 22.5613 6.8087 25.4666 10.2605 25.4666H19.5363C22.988 25.4666 25.728 22.5613 25.526 19.1155L25.0546 11.0739C24.9306 8.95931 23.1796 7.30798 21.0614 7.30798H8.73531ZM11.4062 10.6888C11.9571 10.6888 12.4039 11.1341 12.4062 11.6844L12.4062 11.6847L12.4066 11.6998C12.4071 11.716 12.4082 11.7439 12.4106 11.7818C12.4156 11.858 12.4258 11.9727 12.4469 12.1126C12.4898 12.3974 12.5739 12.7604 12.732 13.1099C12.8895 13.4581 13.1058 13.7615 13.399 13.9775C13.6807 14.1851 14.0912 14.3554 14.7237 14.3554C15.4654 14.3554 15.9551 14.1729 16.2888 13.9505C16.6286 13.7239 16.8677 13.4146 17.0376 13.0749C17.2094 12.7313 17.3003 12.3756 17.3466 12.0973C17.3694 11.9605 17.3804 11.8488 17.3857 11.7751C17.3883 11.7384 17.3895 11.7117 17.39 11.6966L17.3903 11.6833C17.3933 11.1335 17.8399 10.6888 18.3903 10.6888C18.9426 10.6888 19.3903 11.1365 19.3903 11.6888H18.3903C19.3903 11.6888 19.3903 11.6893 19.3903 11.6898L19.3903 11.6909L19.3903 11.6934L19.3903 11.6994L19.3901 11.7154C19.3899 11.7279 19.3895 11.7439 19.3889 11.7633C19.3876 11.8019 19.3852 11.854 19.3806 11.9176C19.3716 12.0444 19.3539 12.2191 19.3194 12.4261C19.2512 12.8353 19.1129 13.3963 18.8264 13.9693C18.5379 14.5463 18.0895 15.1537 17.3982 15.6146C16.7005 16.0796 15.8153 16.3554 14.7237 16.3554C13.6975 16.3554 12.8639 16.0675 12.2126 15.5876C11.5727 15.1161 11.167 14.5028 10.9098 13.9343C10.6533 13.3672 10.53 12.8135 10.4693 12.4108C10.4385 12.2069 10.4228 12.0351 10.4148 11.9108C10.4108 11.8485 10.4086 11.7976 10.4075 11.7601C10.4069 11.7413 10.4066 11.7258 10.4064 11.7139L10.4063 11.6986L10.4062 11.693L10.4062 11.6907L10.4062 11.6897C10.4062 11.6892 10.4062 11.6888 11.4062 11.6888L10.4062 11.6888C10.4062 11.1365 10.854 10.6888 11.4062 10.6888Z"
        fill={fill}
      />
    </Svg>
  );
}

function Plus({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Rect width="24" height="24" fill="white" />
      <Rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="5"
        stroke={fill}
        strokeWidth="1.8"
      />
      <Line
        x1="12.1"
        y1="6.9"
        x2="12.1"
        y2="17.1"
        stroke={fill}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <Line
        x1="6.9"
        y1="11.8"
        x2="17.1"
        y2="11.8"
        stroke={fill}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </Svg>
  );
}

function Heart({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M11.4995 22.2609C11.1062 22.2609 10.7307 22.1362 10.4133 21.9001C8.2588 20.3012 3.10938 16.3239 1.81755 13.9143C0.127895 10.7654 1.14258 6.72131 4.07489 4.89968C5.02253 4.31177 6.09533 4 7.18601 4C8.81755 4 10.3508 4.66808 11.4995 5.85726C12.6483 4.66808 14.1815 4 15.8131 4C16.9038 4 17.9766 4.31177 18.9242 4.89968C21.8565 6.72131 22.8712 10.7654 21.186 13.9143C19.8942 16.3239 14.7448 20.3012 12.5902 21.9001C12.2684 22.1362 11.8929 22.2609 11.4995 22.2609ZM7.18601 5.33616C6.34565 5.33616 5.5187 5.57667 4.78562 6.03096C2.43888 7.49183 1.63428 10.7432 2.99763 13.2819C4.19558 15.5177 9.58639 19.6242 11.209 20.8267C11.3789 20.9514 11.6158 20.9514 11.7856 20.8267C13.4082 19.6197 18.799 15.5133 19.997 13.2819C21.3603 10.7432 20.5557 7.48738 18.209 6.03096C17.4804 5.57667 16.6534 5.33616 15.8131 5.33616C14.3425 5.33616 12.9657 6.04878 12.0359 7.28696L11.4995 8.00848L10.9631 7.28696C10.0334 6.04878 8.6611 5.33616 7.18601 5.33616Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.6"
      />
    </Svg>
  );
}

function Messenger({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M5.81038 19.7478C5.83176 19.4539 5.70787 19.1681 5.47873 18.9827C3.2792 17.2037 1.9 14.5525 1.9 11.5868C1.9 6.27627 6.38748 1.9 12.0098 1.9C17.6196 1.9 22.1078 6.27565 22.1078 11.5868C22.1078 16.8966 17.6092 21.2735 11.998 21.2735C11.0656 21.2735 10.1798 21.1544 9.32697 20.9277C9.15685 20.8825 8.97721 20.8882 8.81028 20.944L5.64643 22.0022L5.81038 19.7478Z"
        stroke={fill}
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <Path
        d="M10.1498 8.79533C10.2222 8.80575 10.2825 8.81618 10.3548 8.82661C11.428 9.05603 12.5252 10.0363 13.3693 10.6203C13.8396 10.954 14.2375 10.9227 14.7078 10.6099C15.7086 9.92159 16.7456 9.2646 17.7705 8.58676C18.0478 8.39905 18.3372 8.20091 18.6748 8.45119C19.0486 8.72233 18.8195 9.01432 18.6266 9.28546C17.6137 10.6829 16.6129 12.0803 15.588 13.4672C14.8886 14.4266 13.8999 14.5622 12.8388 13.8844C12.1032 13.4047 11.3436 12.9562 10.6201 12.4557C10.1378 12.122 9.73984 12.1637 9.28163 12.4765C8.26876 13.1648 7.24382 13.8218 6.21889 14.4996C5.94156 14.6874 5.65216 14.8855 5.31454 14.6248C4.97691 14.3745 5.15778 14.0929 5.33865 13.8322C6.3877 12.3931 7.42469 10.954 8.47374 9.51488C8.82343 9.02475 9.47456 8.73276 10.1498 8.79533Z"
        fill={fill}
      />
    </Svg>
  );
}

function Dots({size, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 15 3"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Circle cx="2.2998" cy="1.5" r="1.5" />
      <Circle cx="7.7998" cy="1.5" r="1.5" />
      <Circle cx="13.2998" cy="1.5" r="1.5" />
    </Svg>
  );
}

function Bookmark({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M19.875 2H4.125C3.50625 2 3 2.44939 3 3.00481V22.4648C3 23.0202 3.36563 23.1616 3.82125 22.7728L11.5444 16.1986C11.7244 16.0471 12.0225 16.0471 12.2025 16.1936L20.1731 22.7879C20.6287 23.1666 21 23.0202 21 22.4648V3.00481C21 2.44939 20.4994 2 19.875 2ZM19.3125 20.0209L13.3444 15.0827C12.9281 14.7394 12.405 14.5677 11.8763 14.5677C11.3363 14.5677 10.8019 14.7444 10.3856 15.0979L4.6875 19.9502V3.51479H19.3125V20.0209Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.7"
      />
    </Svg>
  );
}

function Comment({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2959 20.8165L20.2351 16.8602C20.1743 16.6385 20.2047 16.3994 20.309 16.1907C21.2351 14.3342 21.5438 12.117 20.9742 9.80402C20.2003 6.67374 17.757 4.16081 14.6354 3.33042C13.7833 3.10869 12.9442 3 12.1312 3C6.29665 3 1.74035 8.47365 3.31418 14.5647C4.04458 17.3819 7.05314 20.2992 9.88344 20.9861C10.6486 21.173 11.4008 21.26 12.1312 21.26C13.7006 21.26 15.1701 20.8557 16.4614 20.1601C16.6049 20.0818 16.7657 20.0383 16.9222 20.0383C17.0005 20.0383 17.0787 20.047 17.157 20.0688L21.009 21.0991C21.0307 21.1035 21.0525 21.1078 21.0699 21.1078C21.2177 21.1078 21.3351 20.9687 21.2959 20.8165ZM19.0178 17.1863L19.6178 19.4253L17.4831 18.8558C17.3005 18.8079 17.1135 18.7819 16.9222 18.7819C16.557 18.7819 16.1875 18.8775 15.8571 19.0558C14.6963 19.6818 13.4441 19.9992 12.1312 19.9992C11.4834 19.9992 10.8269 19.9166 10.1791 19.7601C7.78354 19.1775 5.14453 16.6037 4.53586 14.2473C3.90111 11.7865 4.40109 9.26057 5.90536 7.31719C7.40964 5.3738 9.6791 4.26081 12.1312 4.26081C12.8529 4.26081 13.5876 4.35646 14.3137 4.5521C16.9961 5.26511 19.0786 7.39544 19.7525 10.1084C20.2264 12.0213 20.0308 13.9299 19.183 15.6298C18.9395 16.1168 18.8787 16.6689 19.0178 17.1863Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.7"
      />
    </Svg>
  );
}

function Share({size, fill, ...props}) {
  return (
    <Svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.8555 3.44542C22.6978 3.16703 22.3962 3 22.0714 3L2.91369 3.01392C2.52859 3.01392 2.19453 3.25055 2.05997 3.60781C1.96254 3.86764 1.98574 4.14603 2.11565 4.37338C2.16669 4.45689 2.23165 4.53577 2.31052 4.60537L9.69243 10.9712L11.4927 20.5338C11.5623 20.9096 11.8499 21.188 12.2304 21.2483C12.6062 21.3086 12.9774 21.1323 13.1723 20.8029L22.8509 4.35018C23.0179 4.06715 23.0179 3.72381 22.8555 3.44542ZM4.21748 4.39194H19.8164L10.4255 9.75089L4.21748 4.39194ZM12.6248 18.9841L11.1122 10.948L20.5171 5.58436L12.6248 18.9841Z"
        fill={fill}
        stroke={fill}
        strokeWidth="0.7"
      />
    </Svg>
  );
}

export {
  HomeIcon,
  SearchIcon,
  DownloadIcon,
  ReelsIcon,
  ReelsFilled,
  ShopIcon,
  ShopFilled,
  Plus,
  Heart,
  Messenger,
  Dots,
  Bookmark,
  Share,
  Comment,
};
