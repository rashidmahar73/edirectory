import "./customMenu.scss";

export let customItems = [
  {
    key: "/",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 1.5H3C2.17157 1.5 1.5 2.17157 1.5 3V5C1.5 5.82843 2.17157 6.5 3 6.5H5C5.82843 6.5 6.5 5.82843 6.5 5V3C6.5 2.17157 5.82843 1.5 5 1.5ZM3 0C1.34315 0 0 1.34315 0 3V5C0 6.65685 1.34315 8 3 8H5C6.65685 8 8 6.65685 8 5V3C8 1.34315 6.65685 0 5 0H3Z"
            fill=" black"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 11.5H3C2.17157 11.5 1.5 12.1716 1.5 13V15C1.5 15.8284 2.17157 16.5 3 16.5H5C5.82843 16.5 6.5 15.8284 6.5 15V13C6.5 12.1716 5.82843 11.5 5 11.5ZM3 10C1.34315 10 0 11.3431 0 13V15C0 16.6569 1.34315 18 3 18H5C6.65685 18 8 16.6569 8 15V13C8 11.3431 6.65685 10 5 10H3Z"
            fill="black"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 1.5H13C12.1716 1.5 11.5 2.17157 11.5 3V5C11.5 5.82843 12.1716 6.5 13 6.5H15C15.8284 6.5 16.5 5.82843 16.5 5V3C16.5 2.17157 15.8284 1.5 15 1.5ZM13 0C11.3431 0 10 1.34315 10 3V5C10 6.65685 11.3431 8 13 8H15C16.6569 8 18 6.65685 18 5V3C18 1.34315 16.6569 0 15 0H13Z"
            fill="black"
          ></path>
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15 11.5H13C12.1716 11.5 11.5 12.1716 11.5 13V15C11.5 15.8284 12.1716 16.5 13 16.5H15C15.8284 16.5 16.5 15.8284 16.5 15V13C16.5 12.1716 15.8284 11.5 15 11.5ZM13 10C11.3431 10 10 11.3431 10 13V15C10 16.6569 11.3431 18 13 18H15C16.6569 18 18 16.6569 18 15V13C18 11.3431 16.6569 10 15 10H13Z"
            fill="black"
          ></path>
        </svg>
      </div>
    ),
    label: "Dashboard",
  },
  {
    key: "/tv-series",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="18"
          height="21"
          viewBox="0 0 24 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 5C5.55228 5 6 4.55228 6 4C6 3.44772 5.55228 3 5 3C4.44772 3 4 3.44772 4 4C4 4.55228 4.44772 5 5 5Z"
            fill="black"
          ></path>
          <path
            d="M22 8H2C1.46973 7.99947 0.961329 7.78859 0.586371 7.41363C0.211413 7.03867 0.000529477 6.53027 0 6V2C0.000529477 1.46973 0.211413 0.961329 0.586371 0.586371C0.961329 0.211413 1.46973 0.000529477 2 0H22C22.5303 0.000529477 23.0387 0.211413 23.4136 0.586371C23.7886 0.961329 23.9995 1.46973 24 2V6C23.9995 6.53027 23.7886 7.03867 23.4136 7.41363C23.0387 7.78859 22.5303 7.99947 22 8ZM2 2V6H22V2H2Z"
            fill="black"
          ></path>
          <path
            d="M5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15Z"
            fill="black"
          ></path>
          <path
            d="M22 18H2C1.46973 17.9995 0.961329 17.7886 0.586371 17.4136C0.211413 17.0387 0.000529477 16.5303 0 16V12C0.000529477 11.4697 0.211413 10.9613 0.586371 10.5864C0.961329 10.2114 1.46973 10.0005 2 10H22C22.5303 10.0005 23.0387 10.2114 23.4136 10.5864C23.7886 10.9613 23.9995 11.4697 24 12V16C23.9995 16.5303 23.7886 17.0387 23.4136 17.4136C23.0387 17.7886 22.5303 17.9995 22 18ZM2 12V16H22V12H2Z"
            fill="black"
          ></path>
          <path
            d="M5 25C5.55228 25 6 24.5523 6 24C6 23.4477 5.55228 23 5 23C4.44772 23 4 23.4477 4 24C4 24.5523 4.44772 25 5 25Z"
            fill="black"
          ></path>
          <path
            d="M22 28H2C1.46973 27.9995 0.961329 27.7886 0.586371 27.4136C0.211413 27.0387 0.000529477 26.5303 0 26V22C0.000529477 21.4697 0.211413 20.9613 0.586371 20.5864C0.961329 20.2114 1.46973 20.0005 2 20H22C22.5303 20.0005 23.0387 20.2114 23.4136 20.5864C23.7886 20.9613 23.9995 21.4697 24 22V26C23.9995 26.5303 23.7886 27.0387 23.4136 27.4136C23.0387 27.7886 22.5303 27.9995 22 28ZM2 22V26H22V22H2Z"
            fill="black"
          ></path>
        </svg>
      </div>
    ),
    label: "Server Dashboard",
  },
  {
    key: "/uploads",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.53722 9.06166C9.52219 9.04245 9.50298 9.02692 9.48105 9.01624C9.45912 9.00555 9.43505 9 9.41066 9C9.38627 9 9.36219 9.00555 9.34026 9.01624C9.31834 9.02692 9.29913 9.04245 9.2841 9.06166L7.0341 11.9083C7.01555 11.932 7.00404 11.9604 7.00088 11.9904C6.99773 12.0203 7.00306 12.0505 7.01626 12.0775C7.02946 12.1045 7.05001 12.1273 7.07554 12.1432C7.10108 12.1591 7.13057 12.1675 7.16066 12.1675H8.64526V17.0371C8.64526 17.1255 8.71758 17.1978 8.80597 17.1978H10.0113C10.0997 17.1978 10.172 17.1255 10.172 17.0371V12.1695H11.6607C11.7953 12.1695 11.8696 12.0148 11.7872 11.9103L9.53722 9.06166Z"
            fill="#838383"
          ></path>
          <path
            d="M15.0147 4.15246C14.0946 1.72567 11.7502 0 9.00402 0C6.25781 0 3.91339 1.72366 2.9933 4.15045C1.27165 4.60246 0 6.17143 0 8.03571C0 10.2556 1.79799 12.0536 4.01585 12.0536H4.82143C4.90982 12.0536 4.98214 11.9812 4.98214 11.8929V10.6875C4.98214 10.5991 4.90982 10.5268 4.82143 10.5268H4.01585C3.33884 10.5268 2.70201 10.2576 2.2279 9.76942C1.7558 9.28326 1.50469 8.62835 1.52679 7.94933C1.54487 7.41897 1.72567 6.92076 2.05312 6.50089C2.38862 6.07299 2.85871 5.76161 3.38103 5.62299L4.14241 5.42411L4.42165 4.68884C4.59442 4.2308 4.83549 3.8029 5.13884 3.41518C5.43831 3.03089 5.79306 2.69307 6.19152 2.41272C7.01719 1.83214 7.98951 1.52478 9.00402 1.52478C10.0185 1.52478 10.9908 1.83214 11.8165 2.41272C12.2163 2.69397 12.5699 3.03147 12.8692 3.41518C13.1725 3.8029 13.4136 4.23281 13.5864 4.68884L13.8636 5.4221L14.623 5.62299C15.7118 5.91629 16.4732 6.9067 16.4732 8.03571C16.4732 8.70067 16.2141 9.32746 15.744 9.79754C15.5134 10.0294 15.2392 10.2133 14.9371 10.3385C14.635 10.4636 14.3111 10.5276 13.9842 10.5268H13.1786C13.0902 10.5268 13.0179 10.5991 13.0179 10.6875V11.8929C13.0179 11.9812 13.0902 12.0536 13.1786 12.0536H13.9842C16.202 12.0536 18 10.2556 18 8.03571C18 6.17344 16.7324 4.60647 15.0147 4.15246Z"
            fill="#838383"
          ></path>
        </svg>
      </div>
    ),
    label: "Uploads",
  },
  {
    key: "/uploadVideos",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="20"
          height="17"
          viewBox="0 0 20 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.78571 12.5893H4.19643V9.99998C4.19643 9.90177 4.11607 9.82141 4.01786 9.82141H2.94643C2.84821 9.82141 2.76786 9.90177 2.76786 9.99998V12.5893H0.178571C0.0803571 12.5893 0 12.6696 0 12.7678V13.8393C0 13.9375 0.0803571 14.0178 0.178571 14.0178H2.76786V16.6071C2.76786 16.7053 2.84821 16.7857 2.94643 16.7857H4.01786C4.11607 16.7857 4.19643 16.7053 4.19643 16.6071V14.0178H6.78571C6.88393 14.0178 6.96429 13.9375 6.96429 13.8393V12.7678C6.96429 12.6696 6.88393 12.5893 6.78571 12.5893Z"
            fill="#838383"
          ></path>
          <path
            d="M18.9286 3.17634L16.0714 4.82143V1.42857C16.0714 0.640625 15.4308 0 14.6429 0H1.42857C0.640625 0 0 0.640625 0 1.42857V9.28571H1.60714V1.60714H14.4643V14.1071H8.57143V15.7143H14.6429C15.4308 15.7143 16.0714 15.0737 16.0714 14.2857V10.8929L18.9286 12.5379C19.404 12.8125 20 12.4688 20 11.9219V3.79464C20 3.24554 19.404 2.90179 18.9286 3.17634ZM18.3929 10.3795L16.0714 9.04464V6.67188L18.3929 5.33482V10.3795Z"
            fill="#838383"
          ></path>
          <path
            d="M5.71422 4.46428C5.81243 4.46428 5.89279 4.38392 5.89279 4.28571V3.21428C5.89279 3.11606 5.81243 3.03571 5.71422 3.03571H3.21422C3.116 3.03571 3.03564 3.11606 3.03564 3.21428V4.28571C3.03564 4.38392 3.116 4.46428 3.21422 4.46428H5.71422Z"
            fill="#838383"
          ></path>
        </svg>
      </div>
    ),
    label: "Upload Videos",
  },
  {
    key: "/history",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.804 15.6663L12.7085 17.2402C11.8402 17.6382 10.8905 17.9005 9.90452 18V16.1729C10.5739 16.0915 11.207 15.9196 11.804 15.6663ZM1.82714 9.90452H0C0.0994975 10.8995 0.361809 11.8402 0.759799 12.7085L2.33367 11.804C2.0804 11.207 1.90854 10.5739 1.82714 9.90452ZM11.804 2.33367L12.7085 0.759799C11.8402 0.361809 10.8995 0.0994975 9.90452 0V1.82714C10.5739 1.90854 11.207 2.0804 11.804 2.33367ZM16.1729 8.09548H18C17.9005 7.1005 17.6382 6.1598 17.2402 5.29146L15.6663 6.19598C15.9196 6.79296 16.0915 7.42613 16.1729 8.09548ZM6.19598 15.6663L5.29146 17.2402C6.1598 17.6382 7.10955 17.9005 8.09548 18V16.1729C7.42613 16.0915 6.79296 15.9196 6.19598 15.6663ZM8.09548 1.82714V0C7.1005 0.0994975 6.1598 0.361809 5.29146 0.759799L6.19598 2.33367C6.79296 2.0804 7.42613 1.90854 8.09548 1.82714ZM14.7528 4.63116L16.3266 3.71759C15.7568 2.93065 15.0603 2.23417 14.2734 1.66432L13.3598 3.23819C13.8935 3.64523 14.3548 4.10653 14.7528 4.63116ZM2.33367 6.19598L0.759799 5.29146C0.361809 6.1598 0.0994975 7.1005 0 8.09548H1.82714C1.90854 7.42613 2.0804 6.79296 2.33367 6.19598ZM16.1729 9.90452C16.0915 10.5739 15.9196 11.207 15.6663 11.804L17.2402 12.7085C17.6382 11.8402 17.9005 10.8905 18 9.90452H16.1729ZM13.3688 14.7528L14.2824 16.3266C15.0693 15.7568 15.7658 15.0603 16.3357 14.2734L14.7618 13.3598C14.3548 13.8935 13.8935 14.3548 13.3688 14.7528ZM4.63116 3.24724L3.72663 1.66432C2.93065 2.24322 2.24322 2.93065 1.67337 3.72663L3.24724 4.6402C3.64045 4.11286 4.10638 3.64387 4.63116 3.24724ZM3.24724 13.3688L1.67337 14.2734C2.24322 15.0603 2.9397 15.7568 3.72663 16.3266L4.6402 14.7528C4.11286 14.3596 3.64387 13.8936 3.24724 13.3688ZM9.90452 4.47739H8.09548V9.37085L11.9759 13.2513L13.2513 11.9759L9.90452 8.62914V4.47739Z"
            fill="#838383"
          ></path>
        </svg>
      </div>
    ),
    label: "Recent",
  },
  {
    key: "/internalUsersList",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 11.5C3.08 11.5 0 15 0 17V18H18V17C18 15 14.92 11.5 9 11.5Z"
            fill="#838383"
          ></path>
          <path
            d="M9 10C11.7614 10 14 7.76142 14 5C14 2.23858 11.7614 0 9 0C6.23858 0 4 2.23858 4 5C4 7.76142 6.23858 10 9 10Z"
            fill="#838383"
          ></path>
        </svg>
      </div>
    ),
    label: "Users",
  },
  {
    key: "/payments",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M17.2878 9.4749C17.45 9.26636 17.5288 8.99755 17.457 8.72337L15.3275 0.65179C15.2039 0.185252 14.7242 -0.0943345 14.2585 0.0292377L0.651121 3.61702C0.18691 3.73984 -0.0934638 4.22106 0.0285687 4.68681L2.15809 12.7576C2.28012 13.2234 2.76209 13.503 3.22787 13.3809L8.03605 12.1127V14.8153C8.03605 16.3269 10.5409 17.1178 13.0173 17.1178C15.492 17.1178 18 16.3269 18 14.8153V10.7169C18 10.2249 17.7304 9.81089 17.2878 9.4749ZM15.7469 6.69272L15.9693 7.53309L13.2644 8.24756L13.0435 7.40565L15.7469 6.69272ZM14.1774 1.37553L14.5998 2.97596L10.374 4.09129L9.95155 2.49087L14.1774 1.37553ZM12.2811 7.60646L12.4974 8.42828C11.4972 8.47308 10.5239 8.64764 9.74225 8.94577L9.57697 8.32168L12.2811 7.60646ZM2.86403 10.9896L2.64314 10.1507L5.34729 9.43548L5.56973 10.2789L2.86403 10.9896ZM6.10967 9.23546L8.81229 8.52099L9.01697 9.29107C8.9513 9.33124 8.88953 9.37292 8.82927 9.41543L6.33057 10.075L6.10967 9.23546ZM17.0978 14.7488C17.0978 15.6301 15.2719 16.3438 13.0173 16.3438C10.765 16.3438 8.93744 15.6294 8.93744 14.7488V13.7563C8.93744 13.7231 8.95674 13.693 8.96215 13.6613C9.09113 14.4971 10.8476 15.1598 13.0173 15.1598C15.1877 15.1598 16.9449 14.497 17.0731 13.6613C17.0785 13.693 17.0978 13.7231 17.0978 13.7563V14.7488ZM17.0978 12.7962C17.0978 13.6768 15.2719 14.3904 13.0173 14.3904C10.765 14.3904 8.93744 13.6768 8.93744 12.7962V11.8037C8.93744 11.7712 8.95674 11.7403 8.96215 11.7087C9.09113 12.5437 10.8476 13.2079 13.0173 13.2079C15.1877 13.2079 16.9449 12.5437 17.0731 11.7087C17.0785 11.7403 17.0978 11.7712 17.0978 11.8037V12.7962ZM13.0172 12.3104C10.7649 12.3104 8.9374 11.5967 8.9374 10.7169C8.9374 9.83713 10.7649 9.12345 13.0172 9.12345C15.2719 9.12345 17.0978 9.83713 17.0978 10.7169C17.0978 11.5967 15.2719 12.3104 13.0172 12.3104Z"
            fill="#838383"
          ></path>
        </svg>
      </div>
    ),
    label: "Payments",
  },
  {
    key: "/blockedUsers",
    icon: (
      <div className=".ant-menu-item">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M3.24655 4.40345C2.11462 5.81852 1.54421 7.60127 1.64447 9.41058C1.74472 11.2199 2.50861 12.9287 3.78995 14.2101C5.07129 15.4914 6.7801 16.2553 8.58942 16.3555C10.3987 16.4558 12.1815 15.8854 13.5965 14.7535L3.24655 4.40345ZM4.40345 3.24655L14.7535 13.5965C15.8854 12.1815 16.4558 10.3987 16.3555 8.58942C16.2553 6.7801 15.4914 5.07129 14.2101 3.78995C12.9287 2.50861 11.2199 1.74472 9.41058 1.64447C7.60127 1.54421 5.81852 2.11462 4.40345 3.24655ZM9 18C4.02955 18 0 13.9705 0 9C0 4.02955 4.02955 0 9 0C13.9705 0 18 4.02955 18 9C18 13.9705 13.9705 18 9 18Z"
            fill="#838383"
          ></path>
          <path
            d="M9.00009 9.00089C8.3491 9.00089 7.72478 8.74228 7.26446 8.28197C6.80415 7.82165 6.54554 7.19733 6.54554 6.54634C6.54554 5.89536 6.80415 5.27103 7.26446 4.81072C7.72478 4.3504 8.3491 4.0918 9.00009 4.0918C9.65108 4.0918 10.2754 4.3504 10.7357 4.81072C11.196 5.27103 11.4546 5.89536 11.4546 6.54634C11.4546 7.19733 11.196 7.82165 10.7357 8.28197C10.2754 8.74228 9.65108 9.00089 9.00009 9.00089ZM13.091 13.0918H4.90918C4.90918 12.0068 5.34018 10.9663 6.10738 10.1991C6.87457 9.43189 7.91511 9.00089 9.00009 9.00089C10.0851 9.00089 11.1256 9.43189 11.8928 10.1991C12.66 10.9663 13.091 12.0068 13.091 13.0918Z"
            fill="#838383"
          ></path>
        </svg>
      </div>
    ),
    label: "Blocked Users",
  },
  // {
  //   key: "/support",
  //   icon: (
  //     <div className=".ant-menu-item">
  //       <svg
  //         width="18"
  //         height="19"
  //         viewBox="0 0 18 19"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M16.4607 5.73444C15.5761 2.38478 12.5109 0 9.0002 0C5.51107 0 2.44959 2.38389 1.54912 5.73256C0.668871 5.89584 0 6.66955 0 7.59651V9.73258C0 10.5639 0.538113 11.272 1.28426 11.5269V12.4203C1.28426 15.1025 3.46663 17.2846 6.14913 17.2846H6.74773C6.98682 17.8501 7.54711 18.2479 8.19862 18.2479H9.80065C10.6688 18.2479 11.3752 17.5416 11.3752 16.6735C11.3752 15.8052 10.6688 15.0988 9.80065 15.0988H8.19862C7.54727 15.0988 6.98707 15.4964 6.74789 16.0618H6.14913C4.14088 16.0618 2.50706 14.4282 2.50706 12.4203V11.0166C2.50706 10.6789 2.23332 10.4052 1.89566 10.4052C1.52467 10.4052 1.2228 10.1034 1.2228 9.7325V7.59651C1.2228 7.22551 1.52467 6.92365 1.89281 6.92365L2.03702 6.9243C2.038 6.9243 2.03898 6.9243 2.03995 6.9243C2.33016 6.9243 2.58067 6.72009 2.63888 6.43551C3.25705 3.41503 5.93237 1.2228 9.0002 1.2228C12.0879 1.2228 14.7657 3.41348 15.3676 6.43176C15.4245 6.71765 15.6755 6.92357 15.9671 6.92357H16.1043C16.4753 6.92357 16.7772 7.22543 16.7772 7.59643V9.7325C16.7772 10.1034 16.4753 10.4052 16.1043 10.4052C15.7667 10.4052 15.4929 10.6789 15.4929 11.0166C15.4929 11.3543 15.7667 11.628 16.1043 11.628C17.1496 11.628 18 10.7777 18 9.7325V7.59651C17.9999 6.67297 17.3361 5.90163 16.4607 5.73444ZM8.1987 16.3216H9.80073C9.99466 16.3216 10.1525 16.4794 10.1525 16.6735C10.1525 16.8674 9.99466 17.0251 9.80073 17.0251H8.1987C8.00485 17.0251 7.8471 16.8674 7.8471 16.6735C7.84702 16.4794 8.00476 16.3216 8.1987 16.3216Z"
  //           fill="#838383"
  //         ></path>
  //         <path
  //           d="M8.9998 2.9375C5.84229 2.9375 3.27344 5.50611 3.27344 8.66329C3.27344 11.821 5.84229 14.39 8.9998 14.39C12.1573 14.39 14.7261 11.821 14.7261 8.66329C14.7261 5.50611 12.1573 2.9375 8.9998 2.9375ZM8.9998 13.1672C6.51654 13.1672 4.49624 11.1467 4.49624 8.66329C4.49624 6.18036 6.51654 4.1603 8.9998 4.1603C11.4831 4.1603 13.5033 6.18036 13.5033 8.66329C13.5033 11.1468 11.4831 13.1672 8.9998 13.1672Z"
  //           fill="#838383"
  //         ></path>
  //       </svg>
  //     </div>
  //   ),
  //   label: "Support",
  // },
  // {
  //   key: "/revenue",
  //   icon: (
  //     <div className=".ant-menu-item">
  //       <svg
  //         viewBox="64 64 896 896"
  //         focusable="false"
  //         data-icon="fund"
  //         width="1em"
  //         height="1em"
  //         fill="currentColor"
  //         aria-hidden="true"
  //       >
  //         <path d="M926 164H94c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V196c0-17.7-14.3-32-32-32zm-40 632H134V236h752v560zm-658.9-82.3c3.1 3.1 8.2 3.1 11.3 0l172.5-172.5 114.4 114.5c3.1 3.1 8.2 3.1 11.3 0l297-297.2c3.1-3.1 3.1-8.2 0-11.3l-36.8-36.8a8.03 8.03 0 00-11.3 0L531 565 416.6 450.5a8.03 8.03 0 00-11.3 0l-214.9 215a8.03 8.03 0 000 11.3l36.7 36.9z"></path>
  //       </svg>
  //     </div>
  //   ),
  //   label: "Revenue",
  // },
  // {
  //   key: "/logout",
  //   icon: (
  //     <div className=".ant-menu-item">
  //       {/* <Logout/> */}
  //       <svg
  //         width="16"
  //         height="17"
  //         viewBox="0 0 16 17"
  //         fill="none"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <path
  //           d="M11.2205 12.0853C11.0536 11.8881 10.9701 11.6641 10.9701 11.4135C10.9701 11.1634 11.0536 10.955 11.2205 10.788L12.9047 9.10384H6.37269C6.11475 9.10384 5.89868 9.01644 5.72449 8.84165C5.5497 8.66746 5.4623 8.4514 5.4623 8.19346C5.4623 7.93551 5.5497 7.71915 5.72449 7.54435C5.89868 7.37016 6.11475 7.28307 6.37269 7.28307H12.9047L11.2205 5.59886C11.0384 5.41678 10.9474 5.20072 10.9474 4.95067C10.9474 4.70001 11.0384 4.48364 11.2205 4.30156C11.3874 4.11949 11.5962 4.02845 11.8468 4.02845C12.0969 4.02845 12.3054 4.1119 12.4723 4.2788L15.7496 7.55619C15.8407 7.64723 15.9053 7.74585 15.9436 7.85206C15.9812 7.95827 16 8.07207 16 8.19346C16 8.31484 15.9812 8.42864 15.9436 8.53485C15.9053 8.64106 15.8407 8.73969 15.7496 8.83072L12.4723 12.1081C12.275 12.3054 12.0589 12.3924 11.8241 12.3694C11.5886 12.3469 11.3874 12.2522 11.2205 12.0853ZM1.82077 16.3869C1.32006 16.3869 0.891266 16.2088 0.534395 15.8525C0.178132 15.4956 0 15.0669 0 14.5661V1.82077C0 1.32006 0.178132 0.891266 0.534395 0.534395C0.891266 0.178132 1.32006 0 1.82077 0H7.28307C7.54101 0 7.75738 0.0870933 7.93218 0.26128C8.10636 0.436074 8.19346 0.652442 8.19346 0.910384C8.19346 1.16833 8.10636 1.38439 7.93218 1.55858C7.75738 1.73337 7.54101 1.82077 7.28307 1.82077H1.82077V14.5661H7.28307C7.54101 14.5661 7.75738 14.6535 7.93218 14.8283C8.10636 15.0025 8.19346 15.2186 8.19346 15.4765C8.19346 15.7345 8.10636 15.9505 7.93218 16.1247C7.75738 16.2995 7.54101 16.3869 7.28307 16.3869H1.82077Z"
  //           fill="#F63E50"
  //         ></path>
  //       </svg>
  //     </div>
  //   ),
  //   label: "Logout",
  // },
];
