<template>
  <div>
    <div>
      <div>
        <div class="app--drawer shadow-lg">
          <div class="text-center my-5">
            <img src="@/assets/img/icon.svg" width="80" alt="" />
          </div>
          <ul class="m-0">
            <li>
              <router-link
                to="/dashboard"
                class="d-flex align-items-center"
                style="gap: 10px"
              >
                <span>
                  <i-icon icon="material-symbols:dashboard-rounded"></i-icon>
                </span>
                <span>Dashboard</span>
              </router-link>
            </li>
            <li>
              <router-link to="/bnb/ng"
                class="d-flex align-items-center"
                style="gap: 10px"
              >
                <span>
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <g fill="none">
                      <path d="M0 0h24v24H0z" />
                      <path
                        fill="#888888"
                        d="M1.498 12.082c-.01-1.267 1.347-1.987 2.379-1.406l.113.07l2.678 1.804c1.424.96.538 3.145-1.099 2.915l-.138-.025l-.108-.024a7.504 7.504 0 0 0 13.175.335a1.5 1.5 0 0 1 2.599 1.498c-2.317 4.019-7.119 6.152-11.815 4.893a10.502 10.502 0 0 1-7.784-10.06ZM12 6a1 1 0 0 1 1 1v1h1a2.5 2.5 0 0 1 2 4a2.5 2.5 0 0 1-2 4h-1v1a1 1 0 1 1-2 0v-1H9.1A1.1 1.1 0 0 1 8 14.9V9.1A1.1 1.1 0 0 1 9.1 8H11V7a1 1 0 0 1 1-1Zm2 7h-4v1h4a.5.5 0 0 0 0-1ZM2.904 6.751C5.22 2.732 10.022.6 14.718 1.858a10.502 10.502 0 0 1 7.784 10.06c.01 1.267-1.347 1.987-2.379 1.407l-.113-.07l-2.678-1.805c-1.424-.96-.538-3.145 1.099-2.914l.138.025l.109.023A7.504 7.504 0 0 0 5.504 8.25a1.5 1.5 0 1 1-2.6-1.498ZM14 10h-4v1h4a.5.5 0 0 0 0-1Z"
                      />
                    </g>
                  </svg>
                </span>
                <span>Trade</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/orders"
                class="d-flex align-items-center"
                style="gap: 10px"
              >
                <span> <i-icon icon="bxs:business"> </i-icon> </span>
                <span>Orders</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/wallet"
                class="d-flex align-items-center"
                style="gap: 10px"
              >
                <span> <i-icon icon="uil:transaction"></i-icon> </span>
                <span>Wallet</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/transactions"
                class="d-flex align-items-center"
                style="gap: 10px"
              >
                <span> <i-icon icon="uil:transaction"></i-icon> </span>
                <span>Transactions</span>
              </router-link>
            </li>
            <li>
              <router-link
                to="/referrals"
                class="d-flex align-items-center"
                style="gap: 10px"
              >
                <span> <i-icon icon="ci:share"></i-icon> </span>
                <span>Referrals</span>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>