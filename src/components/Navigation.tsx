/* eslint-disable no-undef */
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Colors } from '../contants';
import ConfigIcon from '../svgs/ConfigIcon';
import SunIcon from '../svgs/SunIcon';
import SupportIcon from '../svgs/SupportIcon';

const Navigation: FC = () => {
  const { pathname } = useLocation();

  return (
    <NavigationWrapper>
      <LogoWrapper>
        <LogoImg
          src={`${process.env.PUBLIC_URL}/images/ff14_logo.png`}
          alt="ff14_logo"
        />
      </LogoWrapper>
      <LinkList
        style={{
          width: '800px',
          marginRight: '135px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <UnderLineWrapper underline={pathname === '/'}>
          <Link to="/">ホーム</Link>
        </UnderLineWrapper>
        <WhiteBoxWrapper>
          <a
            href="https://jp.finalfantasyxiv.com/lodestone/"
            target="_blank"
            rel="noreferrer"
          >
            The Lodestone
          </a>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <a
            href="https://jp.finalfantasyxiv.com/lodestone/special/patchnote_log/"
            target="_blank"
            rel="noreferrer"
          >
            パッチノート
          </a>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <a
            href="https://jp.finalfantasyxiv.com/lodestone/playguide/"
            target="_blank"
            rel="noreferrer"
          >
            プレイガイド
          </a>
        </WhiteBoxWrapper>
        <WhiteBoxWrapper>
          <a
            href="https://store.finalfantasyxiv.com/ffxivstore/ja-jp/"
            target="_blank"
            rel="noreferrer"
          >
            オンラインストア
          </a>
        </WhiteBoxWrapper>
      </LinkList>
      <LinkList style={{ width: '250px' }}>
        <div
          style={{
            width: '60px',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <WhiteCircleWrapper>
            <a
              href="https://support.jp.square-enix.com/main.php?id=5381&la=0"
              target="_blank"
              rel="noreferrer"
            >
              <SupportIcon />
            </a>
          </WhiteCircleWrapper>
        </div>
        <UnderLineWrapper
          style={{ width: '60px', margin: '0 25px' }}
          underline={pathname === '/config'}
        >
          <Link to="/config">
            <ConfigIcon />
          </Link>
        </UnderLineWrapper>
        <UnderLineWrapper
          underline={pathname === '/world-status'}
          style={{ width: '60px' }}
        >
          <Link to="/world-status">
            <SunIcon />
          </Link>
        </UnderLineWrapper>
      </LinkList>
    </NavigationWrapper>
  );
};

export default Navigation;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  margin: 0 20px;
  border-bottom: 1px solid #dddcda;
`;

const LogoWrapper = styled.div`
  margin: 10px 100px 0 10px;
`;

const LogoImg = styled.img`
  width: 165px;
  cursor: pointer;
`;

const LinkList = styled.div`
  display: flex;
  align-items: center;
  height: 90px;
`;

type UnderLineWrapperProps = {
  underline?: boolean;
};
const UnderLineWrapper = styled.div<UnderLineWrapperProps>`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  border-bottom: ${({ underline }) =>
    underline ? `2px solid ${Colors.BLACK}` : '0'};
  &:hover {
    svg {
      width: 28px;
      height: 28px;
    }
    border-bottom: 2px solid ${Colors.BLACK};
  }
`;

const WhiteBoxWrapper = styled.div`
  &:hover {
    padding: 10px 20px;
    background: ${Colors.WHITE};
    border-radius: 22px;
  }
`;

const WhiteCircleWrapper = styled.div`
  text-align: center;
  &:hover {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    background: ${Colors.WHITE};
    border-radius: 50%;
    a {
      margin-top: 5px;
    }
    svg {
      width: 28px;
      height: 28px;
    }
  }
`;
