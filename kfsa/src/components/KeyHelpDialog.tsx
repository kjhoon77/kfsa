import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Typography } from '@mui/material';

interface KeyHelpDialogProps {
    open: boolean;
    onClose: () => void;
    keyMapDescription: { [key: string]: string };
}

export default function KeyHelpDialog({ open, onClose, keyMapDescription }: KeyHelpDialogProps) {
    return (
        <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
            <DialogTitle>단축키 도움말 (Function Keys)</DialogTitle>
            <DialogContent dividers>
                <List dense>
                    {Object.entries(keyMapDescription).map(([key, desc]) => (
                        <ListItem key={key}>
                            <ListItemText
                                primary={<Typography variant="subtitle2" color="primary">{key}</Typography>}
                                secondary={desc}
                            />
                        </ListItem>
                    ))}
                </List>
            </DialogContent>
        </Dialog>
    );
}
