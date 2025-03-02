import { Card, CardBody, CardHeader } from "@heroui/card";
import { Link } from "@heroui/link";
import { LinkIcon } from "@heroui/shared-icons";
import React from "react";
import SectionWrapper from "../SectionWrapper";

const VoiceChannel = () => {
  return (
    <SectionWrapper title="语音频道">
      <div className="flex gap-4">
        <Card classNames={{ base: "w-full" }}>
          <CardBody>
            <div className="flex items-center gap-4">
              <LinkIcon fontSize={32} />
              <div>
                <p>OOPZ</p>
                <p>
                  <Link href="https://oopz.cn/i/hadRMl">
                    https://oopz.cn/i/hadRMl
                  </Link>
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
        <Card classNames={{ base: "w-full" }}>
          <CardBody>
            <div className="flex items-center gap-4">
              <LinkIcon fontSize={32} />
              <div>
                <p>OOPZ</p>
                <p>
                  <Link href="https://oopz.cn/i/hadRMl">
                    https://oopz.cn/i/hadRMl
                  </Link>
                </p>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default VoiceChannel;
