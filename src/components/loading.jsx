export default function Loading() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="relative">
        <svg className="absolute animate-spin h-14 w-14  ..." width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 92C73.1959 92 92 73.1959 92 50C92 26.804 73.1959 7.99996 50 7.99996C26.804 7.99996 7.99996 26.804 7.99996 50C7.99996 73.1959 26.804 92 50 92Z"
            fill="#1F1D27"
          />
          <path fill-rule="evenodd" clip-rule="evenodd" d="M100 50C100 22.3858 77.6142 0 50 0V7.99996C73.1959 7.99998 92 26.804 92 50C92 50 92 50 92 50L100 50Z" fill="#A8A6AD" />
        </svg>

        <svg className="h-14 w-14" width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M24.7195 80.1691V51.7316L14.4059 54.5854V67.4774C16.9592 72.3838 20.4639 76.6895 24.7195 80.1441V80.1691Z" fill="#1F1D27" />
          <path
            d="M23.4175 38.2637C22.8668 37.8131 22.3161 37.4126 21.6152 37.1622C20.9142 36.9119 20.1633 36.8118 19.4123 36.8118C18.6613 36.8118 17.9103 36.9119 17.2594 37.1622C16.6086 37.4126 15.9577 37.8131 15.5071 38.2637C15.0565 38.7143 14.6059 39.2149 14.3556 39.8658C14.1053 40.4666 13.9551 41.1174 13.9551 41.8184C13.9551 42.5193 14.1053 43.1201 14.3556 43.7709C14.6059 44.3717 15.0065 44.9225 15.5071 45.373C16.0078 45.8236 16.5585 46.2242 17.2594 46.4745C17.9604 46.7248 18.6112 46.825 19.4123 46.825C20.2133 46.825 20.9142 46.7248 21.6152 46.4745C22.3161 46.2242 22.9169 45.8236 23.4175 45.373C23.9182 44.9225 24.3187 44.4218 24.6191 43.7709C24.9195 43.1701 25.0697 42.5193 25.0697 41.8184C25.0697 41.1174 24.9195 40.5166 24.6191 39.8658C24.3187 39.265 23.8681 38.7143 23.4175 38.2637Z"
            fill="#1F1D27"
          />
          <path
            d="M43.6443 86.6274V61.5944C44.0949 61.1439 44.6456 60.5931 45.2464 60.1926C45.8472 59.7921 46.448 59.3415 47.0988 59.0411C47.7497 58.6906 48.3505 58.4403 49.0013 58.24C49.6522 58.0398 50.3031 57.9396 50.8037 57.9396C51.2543 57.9396 51.755 58.0898 52.1555 58.3902C52.556 58.6906 53.0066 59.1412 53.307 59.5918C53.6575 60.1425 53.9078 60.6933 54.1081 61.3942C54.3083 62.0951 54.4085 62.796 54.4085 63.547V86.7276H63.4954C63.896 86.5774 64.2715 86.4522 64.672 86.302V61.6946C65.0725 61.244 65.5231 60.7433 66.1239 60.2927C66.7247 59.8922 67.2754 59.4416 67.9263 59.1412C68.5771 58.7908 69.1779 58.5404 69.8288 58.3402C70.5297 58.1399 71.1305 58.0398 71.7313 58.0398C72.2319 58.0398 72.7827 58.19 73.1832 58.4904C73.5837 58.7908 74.0343 59.2413 74.3347 59.6919C74.7352 60.2427 74.9355 60.7934 75.1358 61.4943C75.286 62.1952 75.3861 62.8962 75.3861 63.6471L75.4362 63.6972L75.5363 63.497V79.8936C79.9171 76.2387 83.4968 71.6577 86.0001 66.4508V62.6959C86.0001 61.244 85.7498 59.7921 85.149 58.4904C84.5982 57.1886 83.7972 56.0371 82.7959 55.0358C81.7945 54.0345 80.643 53.3336 79.3413 52.7328C78.0396 52.132 76.6377 51.8817 75.1858 51.8817C74.1344 51.8817 73.033 51.9818 71.9816 52.182C70.9302 52.3823 69.8788 52.7328 68.8275 53.0832C67.7761 53.4337 66.7748 53.8843 65.8235 54.435C64.8722 54.9857 64.0712 55.5365 63.2701 56.1873C62.7695 55.4864 62.1687 54.8856 61.4678 54.385C60.7168 53.8843 60.0158 53.3836 59.1647 53.0332C58.3637 52.6326 57.4625 52.3823 56.5613 52.182C55.61 51.9818 54.7089 51.8817 53.8077 51.8817C52.1555 51.8817 50.5033 52.182 48.751 52.883C46.9486 53.4838 45.2464 54.3849 43.6443 55.4864V52.5325H33.3307V85.4759C34.2319 85.9015 35.1831 86.277 36.1344 86.6274H43.6443Z"
            fill="#1F1D27"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M50 100C77.6142 100 100 77.6142 100 50C100 22.3858 77.6142 0 50 0C22.3858 0 0 22.3858 0 50C0 77.6142 22.3858 100 50 100ZM50 92C73.1959 92 92 73.1959 92 50C92 26.804 73.1959 7.99996 50 7.99996C26.804 7.99996 7.99996 26.804 7.99996 50C7.99996 73.1959 26.804 92 50 92Z"
            fill="#FAF8FF"
          />
        </svg>
      </div>
    </div>
  );
}
