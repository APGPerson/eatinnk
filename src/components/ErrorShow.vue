<template>
  <div class="alert-box">
    <strong><b>错误!</b></strong>
    <br/>
    <slot />
  </div>
<!--  From https://play.vuejs.org/#eNp9Uk1v2zAM/SuaduilcfZRBIPnFWiHHLbDNqw76iJbjONWFgWJzjwU+e+j5NhNgaLwxeR7JN970KO88b44DCBLWcUmdJ5EBBr8tXJd7zGQuLEQ6BZHsQvYi4tiPTfS2IVy1Xqa4wkuCHpvNUGqqJqpXAmh6A57oH3nWlFrI/bae3Bgikxd1jK3Wi9r5KU8v5dknp0QojLdQTRWx/hFSZ2YqxpHJTPIcKSArr3ehoDhDUudyhNYh/XCs0hiqqo173yuIluL9M+CiA16MNwplmviMY01aDGU4u1ms/mc6hqDAW6896OIaDsjApgzZBW06YZYiis/5rbXxnA2pfjw7tSpdfPQBhycWc3bd5/Sx+gxR+omQ0mBohMnnUmeMidZZtkpR2Lpbte1xX1Ex0Fm1Uo22PuOrfz01KGLSpaTn4Rpa/Hv99yjMMDl3G/20Dy80L+PHH3JP78CRAgHUHLBSIcWaIK3dz9g5P8F7NEMltmvgL+BUxySxol2y7Gw7DNeVvstv1rO8U/cjgQuzqaS0MQ8Zr6S/Jq+vmL9Se7H4irPcZ7y+B8UtBGM-->
</template>

<style scoped>
.alert-box {
  color: var(--color-text);
  border: 3px solid red;
  border-radius: 1rem;
  padding: 20px;
  background-color: var(--color-background);
}

strong {
  color: red;
}
</style>