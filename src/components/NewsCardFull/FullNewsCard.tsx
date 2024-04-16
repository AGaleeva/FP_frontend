import React from 'react';
import { Dialog, DialogContent, DialogTitle, Typography, IconButton, DialogActions } from '@mui/material';
import { MyButton, MyCardMedia } from './styles';

interface News {
  imgUrl: string
  title: string
  shortDescription: string
  content: string  
}

interface FullNewsCardProps {
  open: boolean;
  onClose: () => void;
  news: News;
}

function FullNewsCard ({ open, onClose, news }: FullNewsCardProps) {
  return (
<Dialog open={open} onClose={onClose} maxWidth="lg">
      <DialogTitle gutterBottom variant="h5" component="h2">
        {news.title}
      </DialogTitle>
      <DialogContent>
        <MyCardMedia
          image={news.imgUrl}
          title="test"
        />
        <Typography variant="body1">{news.shortDescription}</Typography>
        <Typography variant="body1">{news.content}</Typography>
      </DialogContent>
      <DialogActions>
        <MyButton onClick={onClose}>Закрыть</MyButton>
      </DialogActions>
    </Dialog>
  );
};

export default FullNewsCard;
