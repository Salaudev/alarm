import styled from 'styled-components'


const FooterWrapper = styled.div`
  .col-4{
    padding: 10px 20px;
    border-radius: 40px 40px 0 0;
    &.active{
      background-color: #2C314F;
      a{
        color: #fbe206 !important;
      }
    }
    font-size: 18px;
    font-weight: bold;
    a{
      width: 100%;
      height: 100%;
      color: #fff;
    }
  }
`

export default FooterWrapper;