import React from 'react';

export interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  color: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  logo: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
  username: string;
}

export enum ChatRole {
  USER = 'user',
  MODEL = 'model',
}

export interface ChatMessage {
  role: ChatRole;
  text: string;
}

export interface SkillData {
  subject: string;
  A: number; // Current Level
  fullMark: number;
}