import React from "react";
import "./Navbar.css";
import "../../App.css";

const Navbar = () => {
  return (
    <>
      <div className="nav">
        <div className="logo-container">
          <svg
            width="180"
            height="60"
            viewBox="0 0 275 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M64.7566 18.3063C64.7566 18.3063 75.1199 6.78333 82.1 3.78055C89.0805 0.777227 106.639 0.286804 106.639 0.286804V75.1295C106.639 75.1295 90.6801 75.9876 83.6996 78.991C76.7191 81.9943 64.7566 93.1498 64.7566 93.1498V18.3063Z"
              fill="#D1C4E9"
            />
            <path
              d="M115.435 5.80072C115.435 5.80072 112.73 5.88175 109.039 6.15307V78.0725C109.039 78.0725 93.0783 78.9274 86.0978 81.9307C82.4648 83.4938 73.8958 88.7328 69.9524 91.9903L67.9537 98.663C67.9537 98.663 81.5158 90.8183 88.4962 87.8149C95.4767 84.8116 115.434 80.6445 115.434 80.6445L115.435 5.80072Z"
              fill="#B39DDB"
            />
            <path
              d="M123.43 12.0522C123.43 12.0522 121.473 12.1125 118.633 12.2944V83.5883C118.633 83.5883 102.672 84.4432 95.692 87.4465C91.5456 89.2304 82.0581 92.7807 77.9483 96.2707L74.7505 100.501C74.7505 100.501 93.5088 93.762 100.489 90.7585C107.47 87.7552 123.431 86.8958 123.431 86.8958L123.43 12.0522Z"
              fill="#7359A6"
            />
            <path
              d="M58.6739 18.3063C58.6739 18.3063 48.3106 6.78333 41.3305 3.78055C34.35 0.777227 16.791 0.286804 16.791 0.286804V75.1295C16.791 75.1295 32.7505 75.9876 39.7309 78.991C46.7114 81.9943 58.6739 93.1498 58.6739 93.1498V18.3063Z"
              fill="#D1C4E9"
            />
            <path
              d="M7.99448 5.80072C7.99448 5.80072 10.6993 5.88175 14.3904 6.15307V78.0725C14.3904 78.0725 30.3512 78.9274 37.3317 81.9307C40.9647 83.4938 49.5337 88.7328 53.4771 91.9903L55.4758 98.663C55.4758 98.663 41.9137 90.8183 34.9332 87.8149C27.9528 84.8118 7.99512 80.6455 7.99512 80.6455L7.99448 5.80072Z"
              fill="#B39DDB"
            />
            <path
              d="M0 12.0522C0 12.0522 1.95754 12.1125 4.79694 12.2944V83.5883C4.79694 83.5883 20.7577 84.4432 27.7382 87.4465C31.8845 89.2304 41.372 92.7807 45.4818 96.2707L48.6796 100.501C48.6796 100.501 29.9213 93.762 22.9408 90.7585C15.9616 87.7567 0.000897891 86.8969 0.000897891 86.8969L0 12.0522Z"
              fill="#7359A6"
            />
            <path
              d="M170.278 27.2587C170.278 30.2347 169.046 32.3787 166.582 33.6907C168.63 34.4587 170.07 35.4987 170.902 36.8107C171.766 38.0907 172.198 39.7707 172.198 41.8507C172.198 44.7627 171.318 47.0507 169.558 48.7147C167.798 50.3787 165.158 51.2107 161.638 51.2107H151.894V19.1467H157.798C159.686 19.1467 161.062 19.1627 161.926 19.1947C167.494 19.3867 170.278 22.0747 170.278 27.2587ZM156.502 22.6027V32.2027H161.206C162.614 32.1067 163.702 31.6267 164.47 30.7627C165.238 29.8667 165.622 28.8267 165.622 27.6427C165.622 26.4267 165.494 25.5307 165.238 24.9547C165.014 24.3787 164.726 23.9307 164.374 23.6107C164.054 23.2907 163.558 23.0507 162.886 22.8907C161.862 22.6987 160.486 22.6027 158.758 22.6027H156.502ZM160.726 47.3227C165.27 47.3227 167.542 45.4347 167.542 41.6587C167.542 39.7387 166.902 38.2827 165.622 37.2907C164.598 36.2667 162.774 35.7547 160.15 35.7547H156.502V47.3227H160.726ZM183.472 19.9147C185.136 18.9867 187.072 18.5227 189.28 18.5227C191.488 18.5227 193.424 18.9867 195.088 19.9147C196.752 20.8427 198.048 22.1067 198.976 23.7067C200.8 26.8427 201.712 30.6667 201.712 35.1787C201.712 39.5947 200.784 43.4027 198.928 46.6027C197.968 48.2347 196.656 49.5147 194.992 50.4427C193.328 51.3707 191.376 51.8347 189.136 51.8347C186.928 51.8347 185.008 51.3707 183.376 50.4427C181.744 49.5147 180.464 48.2507 179.536 46.6507C177.712 43.5147 176.8 39.6907 176.8 35.1787C176.8 30.6987 177.744 26.8747 179.632 23.7067C180.56 22.1067 181.84 20.8427 183.472 19.9147ZM183.328 44.2507C184.608 46.5867 186.576 47.7547 189.232 47.7547C191.888 47.7547 193.84 46.5867 195.088 44.2507C196.368 41.9147 197.008 38.8907 197.008 35.1787C197.008 31.4347 196.368 28.4107 195.088 26.1067C193.84 23.7707 191.888 22.6027 189.232 22.6027C186.576 22.6027 184.608 23.7707 183.328 26.1067C182.08 28.4107 181.456 31.4347 181.456 35.1787C181.456 38.8907 182.08 41.9147 183.328 44.2507ZM213.284 19.9147C214.948 18.9867 216.884 18.5227 219.092 18.5227C221.3 18.5227 223.236 18.9867 224.9 19.9147C226.564 20.8427 227.86 22.1067 228.788 23.7067C230.612 26.8427 231.524 30.6667 231.524 35.1787C231.524 39.5947 230.596 43.4027 228.74 46.6027C227.78 48.2347 226.468 49.5147 224.804 50.4427C223.14 51.3707 221.188 51.8347 218.948 51.8347C216.74 51.8347 214.82 51.3707 213.188 50.4427C211.556 49.5147 210.276 48.2507 209.348 46.6507C207.524 43.5147 206.612 39.6907 206.612 35.1787C206.612 30.6987 207.556 26.8747 209.444 23.7067C210.372 22.1067 211.652 20.8427 213.284 19.9147ZM213.14 44.2507C214.42 46.5867 216.388 47.7547 219.044 47.7547C221.7 47.7547 223.652 46.5867 224.9 44.2507C226.18 41.9147 226.82 38.8907 226.82 35.1787C226.82 31.4347 226.18 28.4107 224.9 26.1067C223.652 23.7707 221.7 22.6027 219.044 22.6027C216.388 22.6027 214.42 23.7707 213.14 26.1067C211.892 28.4107 211.268 31.4347 211.268 35.1787C211.268 38.8907 211.892 41.9147 213.14 44.2507ZM242.329 19.1467V51.2107H237.769V19.1467H242.329ZM243.673 34.7947L255.865 19.1467H261.577L248.857 34.5547L262.297 51.2107H256.297L243.673 34.7947ZM266.833 46.4587C267.409 45.8827 268.097 45.5947 268.897 45.5947C269.697 45.5947 270.385 45.8827 270.961 46.4587C271.537 47.0027 271.825 47.6907 271.825 48.5227C271.825 49.3227 271.537 50.0267 270.961 50.6347C270.385 51.2107 269.697 51.4987 268.897 51.4987C268.097 51.4987 267.409 51.2107 266.833 50.6347C266.257 50.0267 265.969 49.3227 265.969 48.5227C265.969 47.6907 266.257 47.0027 266.833 46.4587ZM266.881 32.0587C267.457 31.4827 268.145 31.1947 268.945 31.1947C269.745 31.1947 270.433 31.4827 271.009 32.0587C271.585 32.6027 271.873 33.2907 271.873 34.1227C271.873 34.9227 271.585 35.6267 271.009 36.2347C270.433 36.8107 269.745 37.0987 268.945 37.0987C268.145 37.0987 267.457 36.8107 266.881 36.2347C266.305 35.6267 266.017 34.9227 266.017 34.1227C266.017 33.2907 266.305 32.6027 266.881 32.0587ZM151.384 78.0027C152.44 78.4667 153.408 78.6987 154.288 78.6987C155.168 78.6987 155.808 78.5387 156.208 78.2187C156.624 77.8827 156.832 77.4747 156.832 76.9947C156.832 76.4987 156.632 76.0827 156.232 75.7467C155.848 75.4107 155.376 75.1467 154.816 74.9547C154.256 74.7467 153.688 74.5307 153.112 74.3067C152.552 74.0827 152.072 73.7307 151.672 73.2507C151.288 72.7547 151.096 72.1387 151.096 71.4027C151.096 70.3147 151.48 69.4507 152.248 68.8107C153.016 68.1547 154.056 67.8267 155.368 67.8267C156.68 67.8267 157.736 68.0587 158.536 68.5227L158.032 70.1307C157.104 69.8107 156.248 69.6507 155.464 69.6507C154.68 69.6507 154.096 69.7947 153.712 70.0827C153.328 70.3707 153.136 70.7627 153.136 71.2587C153.136 71.7387 153.336 72.1387 153.736 72.4587C154.136 72.7787 154.616 73.0347 155.176 73.2267C155.752 73.4187 156.32 73.6347 156.88 73.8747C157.44 74.0987 157.92 74.4507 158.32 74.9307C158.72 75.4107 158.92 76.0107 158.92 76.7307C158.92 77.7867 158.528 78.6827 157.744 79.4187C156.96 80.1547 155.84 80.5227 154.384 80.5227C153.712 80.5227 153.032 80.4347 152.344 80.2587C151.672 80.0827 151.168 79.8747 150.832 79.6347L151.384 78.0027ZM183.508 80.5227C182.26 80.5227 181.436 80.2667 181.036 79.7547C180.636 79.2267 180.436 78.3307 180.436 77.0667V69.7707L178.06 69.6507L178.276 68.2347L180.484 68.0667L180.7 65.1867L182.644 64.8267V68.0667H186.196L185.98 69.7707H182.62V77.2827C182.62 77.6187 182.628 77.8747 182.644 78.0507C182.676 78.2107 182.764 78.3627 182.908 78.5067C183.068 78.6347 183.404 78.6987 183.916 78.6987C184.428 78.6987 184.94 78.6107 185.452 78.4347L185.86 80.0427C185.108 80.3627 184.324 80.5227 183.508 80.5227ZM214.469 78.9867C213.541 80.0107 212.325 80.5227 210.821 80.5227C209.317 80.5227 208.117 80.0187 207.221 79.0107C206.325 78.0027 205.877 76.4027 205.877 74.2107C205.877 72.0027 206.341 70.3867 207.269 69.3627C208.213 68.3387 209.437 67.8267 210.941 67.8267C212.445 67.8267 213.637 68.3307 214.517 69.3387C215.413 70.3467 215.861 71.9547 215.861 74.1627C215.861 76.3547 215.397 77.9627 214.469 78.9867ZM210.893 69.6027C209.021 69.6027 208.085 71.1307 208.085 74.1867C208.085 77.2267 209.013 78.7467 210.869 78.7467C211.637 78.7467 212.293 78.3867 212.837 77.6667C213.381 76.9467 213.653 75.7467 213.653 74.0667C213.653 72.3867 213.413 71.2267 212.933 70.5867C212.469 69.9307 211.789 69.6027 210.893 69.6027ZM238.992 80.2107H236.832V68.0667H238.632L238.872 69.8667C239.16 69.3867 239.632 68.9307 240.288 68.4987C240.96 68.0507 241.72 67.8267 242.568 67.8267C243.032 67.8267 243.384 67.8667 243.624 67.9467L243.192 69.6747C243.048 69.6587 242.84 69.6507 242.568 69.6507C240.824 69.6507 239.632 70.2827 238.992 71.5467V80.2107ZM268.002 80.5227C266.21 80.5227 264.874 79.9147 263.994 78.6987C263.13 77.4667 262.698 75.9307 262.698 74.0907C262.698 72.2347 263.162 70.7307 264.09 69.5787C265.018 68.4107 266.29 67.8267 267.906 67.8267C269.266 67.8267 270.298 68.2107 271.002 68.9787C271.722 69.7307 272.082 70.7307 272.082 71.9787C272.082 72.5387 271.962 73.2587 271.722 74.1387H264.666C264.698 75.4987 264.994 76.6027 265.554 77.4507C266.114 78.2987 266.946 78.7227 268.05 78.7227C269.17 78.7227 270.226 78.4987 271.218 78.0507L271.77 79.5387C270.618 80.1947 269.362 80.5227 268.002 80.5227ZM270.114 72.3867C270.114 71.5227 269.938 70.8427 269.586 70.3467C269.234 69.8507 268.746 69.6027 268.122 69.6027C267.498 69.6027 266.978 69.7147 266.562 69.9387C266.162 70.1467 265.85 70.4187 265.626 70.7547C265.242 71.3947 265.002 71.9867 264.906 72.5307L270.114 72.5787V72.3867Z"
              fill="#7359A6"
            />
          </svg>
        </div>

        <div className="burger-container">
          <div className="burger"></div>
          <div className="burger"></div>
          <div className="burger"></div>
        </div>
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Services</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
