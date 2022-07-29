export function passportInit(): void;
export function authSignIn(req: any, res: any): void;
export function authVerify({ verifiedNotRequired }: {
    verifiedNotRequired?: boolean;
}): (req: any, res: any, next: any) => any;
export function authLogout(req: any, res: any, next: any): void;
//# sourceMappingURL=auth.d.ts.map