/* eslint-disable no-undef */
import styled from '@emotion/styled';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Navigation: FC = () => {
  return (
    <NavigationWrapper>
      <div>
        <LogoImg
          src={`${process.env.PUBLIC_URL}/images/ff14_logo.png`}
          alt="ff14_logo"
        />
      </div>
      <LinkList>
        <div>
          <Link to="/">ホーム</Link>
        </div>
        <div>
          <a
            href="https://jp.finalfantasyxiv.com/lodestone/"
            target="_blank"
            rel="noreferrer"
          >
            The Lodestone
          </a>
        </div>
        <div>
          <a
            href="https://jp.finalfantasyxiv.com/lodestone/special/patchnote_log/"
            target="_blank"
            rel="noreferrer"
          >
            パッチノート
          </a>
        </div>
        <div>
          <a
            href="https://jp.finalfantasyxiv.com/lodestone/playguide/"
            target="_blank"
            rel="noreferrer"
          >
            プレイガイド
          </a>
        </div>
        <div>
          <a
            href="https://store.finalfantasyxiv.com/ffxivstore/ja-jp/"
            target="_blank"
            rel="noreferrer"
          >
            オンラインストア
          </a>
        </div>
      </LinkList>
      <LinkList>
        <div>
          <a
            href="https://support.jp.square-enix.com/main.php?id=5381&la=0"
            target="_blank"
            rel="noreferrer"
          >
            サポート
          </a>
        </div>
        <div>
          <Link to="/config">コンフィグ</Link>
        </div>
        <div>
          <Link to="/world-status">WorldStatus</Link>
        </div>
      </LinkList>
    </NavigationWrapper>
  );
};

export default Navigation;

const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoImg = styled.img`
  width: 165px;
  cursor: pointer;
`;

const LinkList = styled.div`
  display: flex;
`;
